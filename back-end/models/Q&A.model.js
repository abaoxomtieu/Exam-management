import mongoose from "mongoose";

const QASchema = new mongoose.Schema({
  topicId: Number,
  question: Array,
  answer: Array,
  correctAnswer: Array,
});

const QA = mongoose.model("QA", QASchema, "Q&A");

export default QA;
