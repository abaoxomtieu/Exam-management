// routes/webRoutes.js
import express from "express";
import {
  litsAccount,
  createAccount,
} from "../controllers/account.controller.js";
const router = express.Router();

router.get("/", litsAccount);
router.post("/", createAccount);

export default router;
