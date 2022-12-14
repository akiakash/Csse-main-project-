const express = require("express");
const mongoose = require("mongoose");

const app = express();

const cors = require("cors");

app.use(cors());

var bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    parameterLimit: 100000,
    extended: false,
  })
);

app.use(
  bodyParser.json({
    limit: "5mb",
  })
);

app.get("/", (req, res) => {
  res.send("We are on Home");
});

const OrderManagement = require("./router/purchaseorders.router");
const SupplyManagement = require("./router/suppliers.router");
const DeliveryManagement = require("./router/delivery.router");
const ProductManagement = require("./router/product.router");

app.use("/deliverymanagement", DeliveryManagement);
app.use("/ordermanagement", OrderManagement);
app.use("/supplymanagement", SupplyManagement);
app.use("/productmanagement", ProductManagement);

mongoose.connect(
  "mongodb+srv://akash:Akiakash1@cluster0.goear.mongodb.net/?retryWrites=true&w=majority",
  () => console.log("Successfully connected ")
);

//Server host
app.listen(9999);
