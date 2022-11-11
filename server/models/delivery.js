const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  quantity: {
    type: String,
    required: true,
  },
  deliverydate: {
    type: String,
    required: true,
  },
  receiveddate: {
    type: String,
    required: true,
  },
  deliverycost: {
    type: String,
    required: true,
  },
  totalcost: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("delivery", PostSchema);
