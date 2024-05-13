const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
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

const Question = model("Question", questionSchema);

module.exports = Question;
