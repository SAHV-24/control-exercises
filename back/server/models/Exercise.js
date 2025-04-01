const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    title: String,
    imageUrl: String,
    question: String,
    description: String,
    answer: String,
    imageport: String,
    answcod: String,
  },
  { timestamps: false, versionKey: false }
);

module.exports = mongoose.model("Exercise", exerciseSchema);
