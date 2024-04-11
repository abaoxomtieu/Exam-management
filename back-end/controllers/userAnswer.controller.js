import userAnswer from "../models/userQA.model.js";

export const listUserAnswer = async (req, res) => {
  try {
    const data = await userAnswer.find({});
    console.log(data);
    res.status(200).json(data);
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
