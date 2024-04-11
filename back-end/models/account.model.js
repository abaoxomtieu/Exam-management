import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    userId: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("Account", accountSchema, "account");

export default Account;
