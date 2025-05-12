import express from "express";
import { broadcastTransaction } from "../controllers/tx.controller.js";

const router = express.Router();

router.post("/broadcast", broadcastTransaction);

export default router;
