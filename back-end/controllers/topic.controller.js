import Topic from "../models/topic.model.js";

export const listTopic = async (req, res) => {
  try {
    const data = await Topic.find({});
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createTopic = async (req, res) => {
  try {
    console.log("Create Topic")

    console.log(req.body);

    // Check if all required fields are present
    if (!req.body.topicId || !req.body.topicName) {
      return res
        .status(400)
        .json({ error: "Missing required fields in topic" });
    }

    const topic = new Topic(req.body);
    await topic.save();
    res.status(200).json({
      message: `Success`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
