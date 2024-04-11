import express from "express";
import {
  createQuestion,
  detailQA,
  litsAllQA,
} from "../controllers/QA.controller.js";

const router = express.Router();

router.post("/", createQuestion);
router.get("/", litsAllQA);
router.get("/:id", detailQA);

export default router;
