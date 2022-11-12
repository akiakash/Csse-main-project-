const express = require("express");
const Router = express.Router();
const Product = require("../models/product");
const router = express.Router();

router.post("/", async (req, res) => {
  const product = new Product({
    itemcode: req.body.itemcode,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  try {
    const saveProduct = await product.save();
    res.json(saveProduct);
  } catch (err) {
    res.json({ message: err });
    res.json(err);
  }
});

router.get("/", async (req, res) => {
  const product = await Product.find();
  try {
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:productid", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productid);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:productid", async (req, res) => {
  try {
    const removeProduct = await Product.remove({
      _id: req.params.productid,
    });
    res.json(removeProduct);
  } catch (err) {
    console.log(err);
  }
});

// router.patch("/:deliveryid", async (req, res) => {
//   try {
//     const updatedDelivery = await Delivery.updateOne(
//       { _id: req.params.deliveryid },
//       {
//         $set: {
//           no: req.body.no,
//           quantity: req.body.quantity,
//           deliverydate: req.body.deliverydate,
//           receiveddate: req.body.receiveddate,
//           deliverycost: req.body.deliverycost,
//           totalcost: req.body.totalcost,
//         },
//       }
//     );
//     res.json(updatedDelivery);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
