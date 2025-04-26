const { Schema, model } = require("mongoose");

const truetiesSchema = new Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required."],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["regular", "spicy"],
      required: [true, "Category is required."],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Trueties = model("Trueties", truetiesSchema);

module.exports = Trueties;
