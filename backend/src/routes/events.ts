import { GetEventsHandler } from './../controllers/events';
import { Router } from "express";

const router = Router();

router.get("/events", GetEventsHandler);

export default router;