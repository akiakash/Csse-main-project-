const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  itemcode: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("products", PostSchema);
