const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },

  weight: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    required: true,
  },
  MRP: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },

  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
