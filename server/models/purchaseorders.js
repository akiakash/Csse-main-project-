const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  no: {
    type: String,
    required: true,
  },
  sitecode: {
    type: String,
    required: true,
  },
  itemcode: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  cdate: {
    type: String,
    required: true,
  },
  ldate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("orderss", PostSchema);
