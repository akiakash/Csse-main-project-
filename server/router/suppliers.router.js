const express = require("express");
const Router = express.Router();
const Supply = require("../models/suppliers");
const router = express.Router();

router.post("/", async (req, res) => {
  const supply = new Supply({
    suppliercode: req.body.suppliercode,
    address: req.body.address,
    itemcode: req.body.itemcode,
    quantity: req.body.quantity,
    unitprice: req.body.unitprice,
    totalprice: req.body.totalprice,
  });
  try {
    const saveSupply = await supply.save();
    res.json(saveSupply);
  } catch (err) {
    res.json({ message: err });
    res.json(err);
  }
});

router.get("/", async (req, res) => {
  const supply = await Supply.find();
  try {
    res.json(supply);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:supplyid", async (req, res) => {
  try {
    const supply = await Supply.findById(req.params.supplyid);
    res.json(supply);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:supplyid", async (req, res) => {
  try {
    const removeSupply = await Supply.remove({
      _id: req.params.supplyid,
    });
    res.json(removeSupply);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:supplyid", async (req, res) => {
  try {
    const updatedSupply = await Supply.updateOne(
      { _id: req.params.supplyid },
      {
        $set: {
          suppliercode: req.body.suppliercode,
          address: req.body.address,
          itemcode: req.body.itemcode,
          quantity: req.body.quantity,
          unitprice: req.body.unitprice,
          totalprice: req.body.totalprice,
        },
      }
    );
    res.json(updatedSupply);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
