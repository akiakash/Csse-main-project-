import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddProduct() {
  const [item, setItem] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addproduct = () => {
    axios
      .post("http://localhost:9999/productmanagement", {
        itemcode: item,
        name: name,
        price: price,
        quantity: quantity,
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
      <h1>Add Product</h1>
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
            label="Item Code"
            id="outlined-size-small"
            size="small"
            onChange={(e) => setItem(e.target.value)}
          />

          <TextField
            label="Name"
            id="outlined-size-normal"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Price"
            id="filled-size-small"
            variant="filled"
            size="small"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Quantity"
            id="filled-size-normal"
            variant="filled"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={addproduct}>
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
