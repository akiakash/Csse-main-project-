const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  suppliercode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  itemcode: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  unitprice: {
    type: String,
    required: true,
  },
  totalprice: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("suppliers", PostSchema);
