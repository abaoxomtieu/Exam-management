import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  topicId: String,
  topicName: String,
});

const Topic = mongoose.model("Topic", topicSchema, "topic");

export default Topic;
