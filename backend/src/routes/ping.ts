import { Router } from "express";
import { PingHandler } from "../controllers/ping";

const router = Router();

router.get("/ping", PingHandler);

export default router;