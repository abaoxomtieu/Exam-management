import express from 'express';
import { listUserAnswer, saveUserAnswer } from '../controllers/userAnswer.controller.js';

const router = express.Router();

router.get('/',listUserAnswer)
router.post('/',saveUserAnswer)

export default router;