const express = require("express");
const Router = express.Router();
const Delivery = require("../models/delivery");
const router = express.Router();

router.post("/", async (req, res) => {
  const delivery = new Delivery({
    quantity: req.body.quantity,
    deliverydate: req.body.deliverydate,
    receiveddate: req.body.receiveddate,
    deliverycost: req.body.deliverycost,
    totalcost: req.body.totalcost,
  });
  try {
    const saveDelivery = await delivery.save();
    res.json(saveDelivery);
  } catch (err) {
    res.json({ message: err });
    res.json(err);
  }
});

router.get("/", async (req, res) => {
  const delivery = await Delivery.find();
  try {
    res.json(delivery);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:deliveryid", async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.deliveryid);
    res.json(delivery);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:deliveryid", async (req, res) => {
  try {
    const removeDelivery = await Delivery.remove({
      _id: req.params.deliveryid,
    });
    res.json(removeDelivery);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:deliveryid", async (req, res) => {
  try {
    const updatedDelivery = await Delivery.updateOne(
      { _id: req.params.deliveryid },
      {
        $set: {
          no: req.body.no,
          quantity: req.body.quantity,
          deliverydate: req.body.deliverydate,
          receiveddate: req.body.receiveddate,
          deliverycost: req.body.deliverycost,
          totalcost: req.body.totalcost,
        },
      }
    );
    res.json(updatedDelivery);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
