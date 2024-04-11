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
  console.log(req.body);
  const account = new Account(req.body);
  await account.save();
  res.status(200).json({
    message: `Successfully created ${req.body.id}`,
  });
};
