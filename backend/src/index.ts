import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pingRoute from "./routes/ping";
import eventsRoute from "./routes/events";
import eventsWebhookRoute from "./routes/eventsWebhook";
import { eventInfo, eventInfoMutex, fetchEvents } from "./data/eventData";

dotenv.config();

(async () => {
  try {
    const events = await fetchEvents();
    eventInfoMutex.runExclusive(() => eventInfo.push(...events));
    console.log("Events fetched successfully");
  } catch (error) {
    // do we ungracefully bail out here???
    // could just load from a backup file instead
    console.error("Error fetching events on startup:", error);
  }

  const app: Express = express();
  const port = process.env.PORT || 9000;

  // Middleware
  app.use(
    express.json({
      verify: (req, res, buf) => {
        req.rawBody = buf;
      },
    })
  );
  app.use(cors());

  app.use(pingRoute);
  app.use(eventsWebhookRoute);
  app.use(eventsRoute);

  app.listen(port, () => {
    console.log(`Server successfully started on port ${port}`);
  });
})();
