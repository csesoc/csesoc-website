import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pingRoute from "./routes/ping";
import eventsRoute from "./routes/events";
import eventsWebhookRoute from "./routes/eventsWebhook";
import { fetchEvents } from "./data/eventData";

dotenv.config();

(async () => {
  try {
    await fetchEvents();
    console.log("Events fetched successfully");
  } catch (error) {
    // do we ungracefully bail out here???
    console.error("Error fetching events:", error);
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
