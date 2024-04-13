import express from 'express';
import { listUserAnswer, listUserAnswerDetail, saveUserAnswer } from '../controllers/userAnswer.controller.js';

const router = express.Router();

router.get('/',listUserAnswer)
router.get('/:userId/:topicId',listUserAnswerDetail)
router.post('/',saveUserAnswer)

export default router;