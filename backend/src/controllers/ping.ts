import { RequestHandler } from "express";

export const PingHandler: RequestHandler = (req, res) => {
  res.status(200).send("Ping success!");
}