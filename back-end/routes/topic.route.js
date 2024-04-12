import express from "express";
import { createTopic, listTopic, topicDetail } from "../controllers/topic.controller.js";


const router = express.Router();

router.get("/", listTopic)
router.get("/:id", topicDetail)
router.post("/", createTopic)


export default router;
