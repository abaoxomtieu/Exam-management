import Account from "../models/account.model.js";

export const litsAccount = async (req, res) => {
  try {
    const data = await Account.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createAccount = async (req, res) => {
  try {
    console.log(req.body);

    // Check if userName is not an empty string
    if (!req.body.userId) {
      return res.status(400).json({ error: "userId cannot be empty" });
    }

    const account = new Account(req.body);
    await account.save();
    res.status(200).json({
      message: `Success`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
