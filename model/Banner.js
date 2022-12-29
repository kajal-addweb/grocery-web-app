const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Banner", bannerSchema);
