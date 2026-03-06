import crypto from "crypto";
import { RequestHandler } from "express";
import { eventInfo, eventInfoMutex, fetchEvent } from "../data/eventData";
import { filterInPlace, replaceInPlace } from "../util";

interface FacebookWebhookPayload {
  object: string;
  entry: Array<{
    id: string;
    changes: Array<{
      field: string;
      value: {
        event_id: string;
        item: string;
        verb: string;
      };
    }>;
  }>;
}

const verifySignature = (
  rawBody: Buffer,
  signatureHeader?: string
): boolean => {
  if (!signatureHeader) return false;
  const [algo, signature] = signatureHeader.split("=");
  if (algo !== "sha256") return false;

  const expected = crypto
    .createHmac("sha256", process.env.FB_APP_SECRET as string)
    .update(rawBody)
    .digest("hex");

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
};

export const EventsWebhookVerifier: RequestHandler = (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === process.env.FB_WEBHOOK_VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }

  res.sendStatus(403);
};

/*
Sample webhook payload
https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-pages -- for the outer wrapper
https://developers.facebook.com/docs/graph-api/webhooks/reference/page/#feed -- for the inner objects

{
  "object": "page",
  "entry": [
    {
      "id": "PAGE_ID",
      "time": 1623242342342,
      "changes": [
        {
          "field": "events",
          "value": {
            "event_id": "123456789",
            "verb": "create",  // also "edit" or "delete"
            "published": 1
          }
        }
      ]
    }
  ]
}
*/

export const EventsWebhookUpdate: RequestHandler = async (req, res) => {
  const signature = req.headers["x-hub-signature-256"];
  if (
    !req.rawBody ||
    typeof signature !== "string" ||
    !verifySignature(req.rawBody, signature)
  ) {
    return res.sendStatus(401);
  }

  const notif: FacebookWebhookPayload = req.body;
  if (
    !notif ||
    !notif.entry ||
    notif.object !== "page" ||
    notif.entry.length === 0
  ) {
    return res.sendStatus(400);
  }

  for (const entry of notif.entry) {
    if (entry.id !== process.env.FB_EVENT_PAGE_ID) continue;

    for (const change of entry.changes) {
      if (change.field !== "feed" || change.value.item !== "event") continue;

      try {
        if (change.value.verb === "delete") {
          await eventInfoMutex.runExclusive(() =>
            filterInPlace(eventInfo, (val) => val.id !== change.value.event_id)
          );
          console.log(`Deleted event: ${change.value.event_id}`);
        } else if (change.value.verb === "edit") {
          const newEvent = await fetchEvent(change.value.event_id);

          eventInfoMutex.runExclusive(() =>
            replaceInPlace(
              eventInfo,
              (val) => val.id === change.value.event_id,
              newEvent
            )
          );
          console.log(`Edited event: ${change.value.event_id}`);
        } else if (change.value.verb === "add") {
          const newEvent = await fetchEvent(change.value.event_id);
          await eventInfoMutex.runExclusive(() => eventInfo.push(newEvent));
          console.log(`Added event: ${change.value.event_id}`);
        } else {
          console.warn(
            `Unknown verb "${change.value.verb}" for event ${change.value.event_id}`
          );
        }
      } catch (err) {
        console.error(
          `Error processing event: ${change.value.event_id}:\n${err}`
        );
        return res.sendStatus(500);
      }
    }
  }

  res.sendStatus(200);
};
