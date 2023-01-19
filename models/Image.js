const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", Schema);
