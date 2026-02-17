import { Router } from "express";
import { EventsHandler } from "../controllers/events";

const router = Router();

router.get("/events", EventsHandler);

export default router;