const { Schema, model } = require("mongoose");

const challengeSchema = new Schema(
  {
    challenge: {
      type: String,
      required: [true, "Challenge is required."],
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

const Challenge = model("Challenge", challengeSchema);

module.exports = Challenge;
