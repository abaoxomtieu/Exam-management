import express from "express";
import {
  listUserAnswer,
  listUserAnswerAll,
  listUserAnswerDetail,
  saveUserAnswer,
} from "../controllers/userAnswer.controller.js";

const router = express.Router();

router.get("/", listUserAnswerAll);
router.get("/:userId", listUserAnswer);
router.get("/:userId/:topicId", listUserAnswerDetail);
router.post("/", saveUserAnswer);

export default router;
