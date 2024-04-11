import mongoose from "mongoose";

const userAnswerSchema = new mongoose.Schema({
  topicId: Number,
  userId: String,
  answer: Array,
});

const userAnswer = mongoose.model("userAnswer", userAnswerSchema, "userAnswer");

export default userAnswer;
