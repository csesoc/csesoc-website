import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server successfully started on port ${port}`);
});