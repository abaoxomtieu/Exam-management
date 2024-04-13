import userAnswer from "../models/userQA.model.js";

export const listUserAnswerAll = async (req, res) => {
  try {
    const data = await userAnswer.find({});
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const listUserAnswerDetail = async (req, res) => {
  const userId = req.params.userId;
  const topicId = req.params.topicId;
  console.log(userId, topicId);
  try {
    const data = await userAnswer.findOne({ userId, topicId });

    if (data) {
      console.log(data);
      res.status(200).json(data);
    } else {
      res
        .status(404)
        .json({ message: "No document found for this user and topic" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const listUserAnswer = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const data = await userAnswer.find({ userId });

    if (data) {
      console.log(data);
      res.status(200).json(data);
    } else {
      res
        .status(404)
        .json({ message: "No document found for this user and topic" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const saveUserAnswer = async (req, res) => {
  try {
    console.log("Save User Answer");

    console.log(req.body);

    // Check if all required fields are present
    if (!req.body.topicId || !req.body.userId || !req.body.answer) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const userAnswerData = new userAnswer(req.body);
    await userAnswerData.save();
    res.status(200).json({
      message: `Success`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
