const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    defaut: "public",
    enum: ["public", "private"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required : true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Story", Schema);
