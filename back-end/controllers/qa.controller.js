// controllers/questionController.js
import QA from "../models/Q&A.model.js";

export const createQuestion = async (req, res) => {
  console.log(req.body);
  const data = new QA(req.body);
  await data.save();
  res.status(200).json({
    message: `Successfully created`,
  });
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
    const topicId = req.params.id
    const data = await QA.find({topicId: topicId});
    res.status(200).json(data); 
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
