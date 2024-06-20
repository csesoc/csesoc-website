import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pingRoute from "./routes/ping";
import eventsRoutes from "./routes/events";
import { getGoogleSheetsClient } from "./api/googleapi";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(cors());

// Setup Google API
getGoogleSheetsClient().then((client) => {
  app.set("googleSheetsClient", client);
  console.log("Successfully initialised Google Sheets client");
});

// Routes
app.use(eventsRoutes);
app.use(pingRoute);

app.listen(port, () => {
  console.log(`Server successfully started on port ${port}`);
});