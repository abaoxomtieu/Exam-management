// routes/webRoutes.js
import express from "express";
import {
  litsAccount,
  createAccount,
} from "../controllers/account.controller.js";
import { createQuestion, detailQA, litsAllQA } from "../controllers/qa.controller.js";
const router = express.Router();

router.get("/account", litsAccount);
router.post("/account", createAccount);
router.post("/QA", createQuestion);
router.get("/QA", litsAllQA);
router.get("/QA/:id", detailQA);

export default router;
