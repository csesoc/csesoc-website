import crypto from 'crypto';
import { RequestHandler } from "express";
import { eventInfo, fetchEvent, filterInPlace, replaceInPlace } from '../data/eventData';

interface ChangesEntry {
  field: string;
  value: {
    event_id: string;
    item: string;
    verb: string;
  }
}

interface FacebookWebhookNotificationEntry {
  id: string;
  changes: ChangesEntry[];
}

interface FacebookWebhookNotification {
  entry: FacebookWebhookNotificationEntry[];
  object: string;
}

const verifySignature = (rawBody: Buffer, signatureHeader?: string): boolean => {
  if (!signatureHeader) return false;
  const [algo, signature] = signatureHeader.split('=');
  if (algo !== 'sha256') return false;

  const expected = crypto
    .createHmac('sha256', process.env.FB_APP_SECRET as string)
    .update(rawBody)
    .digest('hex');

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

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
  const signature = req.headers['x-hub-signature-256'];
  if (!req.rawBody || typeof signature !== "string" || !verifySignature(req.rawBody, signature)) {
    return res.sendStatus(401);
  }

  const notif: FacebookWebhookNotification = req.body;
  if (!notif || !notif.entry || notif.object !== "page" || notif.entry.length === 0) {
    return res.sendStatus(400);
  }

  for (const entry of notif.entry) {
    if (entry.id !== process.env.FB_EVENT_PAGE_ID) continue;

    for (const change of entry.changes) {
      if (change.field !== "feed" || change.value.item !== "event") continue;

      if (change.value.verb === "delete") {
        // we need filter *in place* because all imports are immutable (the REAL const)
        filterInPlace(eventInfo, (val, index, arr) => val.id !== change.value.event_id);
      } else {
        try {
          const newEvent = await fetchEvent(change.value.event_id);
          replaceInPlace(eventInfo, (val, index, arr) => val.id === change.value.event_id, newEvent);
        } catch(err) {
          console.log(`Wasn't able to update event for some reason: ${err}`);
        }
      }
    }
  }

  res.sendStatus(200);
}