import { Router } from "express";
import { EventsWebhookUpdate, EventsWebhookVerifier } from "../controllers/eventsWebhook";

const router = Router();

router.post("/eventsWebhook", EventsWebhookUpdate);
router.get("/eventsWebhook", EventsWebhookVerifier);

export default router;