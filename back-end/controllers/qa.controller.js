// controllers/questionController.js
import QA from "../models/Q&A.model.js";

export const createQuestion = async (req, res) => {
  try {
    console.log("Create Question")

    console.log(req.body);

    // Check if all required fields are present
    if (
      !req.body.topicId ||
      !req.body.question ||
      !req.body.answer ||
      !req.body.correctAnswer
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const data = new QA(req.body);
    await data.save();
    res.status(200).json({
      message: `Success`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const litsAllQA = async (req, res) => {
  try {
    const data = await QA.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const detailQA = async (req, res) => {
  try {
    const topicId = req.params.id;
    const data = await QA.find({ topicId: topicId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
