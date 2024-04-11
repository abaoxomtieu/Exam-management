import express from "express";
import { createTopic, listTopic } from "../controllers/topic.controller.js";


const router = express.Router();

router.get("/", listTopic)
router.post("/", createTopic)


export default router;
