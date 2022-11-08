const express = require("express");
const Router = express.Router();
const Orders = require("../models/purchaseorders");
const router = express.Router();

router.post("/", async (req, res) => {
  const orders = new Orders({
    no: req.body.no,
    sitecode: req.body.sitecode,
    itemcode: req.body.itemcode,
    status: req.body.status,
    cdate: req.body.cdate,
    ldate: req.body.ldate,
  });
  try {
    const saveOrders = await orders.save();
    res.json(saveOrders);
  } catch (err) {
    res.json({ message: err });
    res.json(err);
  }
});

router.get("/", async (req, res) => {
  const orders = await Orders.find();
  try {
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:appointmentid", async (req, res) => {
  try {
    const orders = await Orders.findById(req.params.appointmentid);
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:ordersid", async (req, res) => {
  try {
    const removeOrders = await Orders.remove({
      _id: req.params.ordersid,
    });
    res.json(removeOrders);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:ordersid", async (req, res) => {
  try {
    const updatedOrders = await Orders.updateOne(
      { _id: req.params.ordersid },
      {
        $set: {
          no: req.body.no,
          sitecode: req.body.sitecode,
          itemcode: req.body.itemcode,
          status: req.body.status,
          cdate: req.body.cdate,
          ldate: req.body.ldate,
        },
      }
    );
    res.json(updatedOrders);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
