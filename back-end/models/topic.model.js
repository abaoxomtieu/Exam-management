import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  topicId: Number,
  topicName: String,
});

const Topic = mongoose.model("Topic", topicSchema, "topic");

export default Topic;
