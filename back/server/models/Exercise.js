const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    answer: String,
    answerDescrition: String,
    topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exercise", exerciseSchema);
