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

app.use("/ordermanagement", OrderManagement);

mongoose.connect(
  "mongodb+srv://akash:Akiakash1@cluster0.goear.mongodb.net/?retryWrites=true&w=majority",
  () => console.log("Successfully connected ")
);

//Server host
app.listen(9999);
