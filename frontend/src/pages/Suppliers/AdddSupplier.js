import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddSupplier() {
  const [code, setCode] = useState("");
  const [address, setAddress] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [total, setTotal] = useState("");

  const addsupplier = () => {
    axios
      .post("http://localhost:9999/supplymanagement", {
        suppliercode: code,
        address: address,
        itemcode: item,
        quantity: quantity,
        unitprice: unit,
        totalprice: total,
      })
      .then((response) => {
        console.log("response : ", response);
        alert("successfullyy updated");
        window.location = "/home";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <h1>Add Order</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch", height: "10ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ paddingTop: "10%" }}
      >
        <div>
          <TextField
            label="Supplier Code"
            id="outlined-size-small"
            size="small"
            onChange={(e) => setCode(e.target.value)}
          />
          <TextField
            label="Address"
            id="outlined-size-normal"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Item code"
            id="filled-size-small"
            variant="filled"
            size="small"
            onChange={(e) => setItem(e.target.value)}
          />
          <TextField
            label="Quantity"
            id="filled-size-normal"
            variant="filled"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Unit Price"
            id="standard-size-small"
            size="small"
            variant="standard"
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Total Price"
            id="standard-size-small"
            size="small"
            variant="standard"
            onChange={(e) => setTotal(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={addsupplier}>
          {" "}
          Submit
        </Button>{" "}
        <a href="/viewsuppliers">
          <Button variant="contained"> Cancel</Button>{" "}
        </a>
      </Box>
    </div>
  );
}
