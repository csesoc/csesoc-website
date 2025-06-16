import { RequestHandler } from "express";
import { eventInfo } from "../data/eventData";

export const EventsHandler: RequestHandler = (req, res) => {
  res.status(200).json(eventInfo);
}