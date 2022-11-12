import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddOrder() {
  const [no, setNo] = useState("");
  const [site, setSite] = useState("");
  const [item, setItem] = useState("");
  const [status, setStatus] = useState("");
  const [last, setLast] = useState("");
  const [cdate, setCdate] = useState("");

  const addOrder = () => {
    axios
      .post("http://localhost:9999/ordermanagement", {
        no: no,
        sitecode: site,
        itemcode: item,
        status: status,
        cdate: last,
        ldate: cdate,
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
            label="No"
            id="outlined-size-small"
            size="small"
            onChange={(e) => setNo(e.target.value)}
          />
          <TextField
            label="Site Code"
            id="outlined-size-normal"
            onChange={(e) => setSite(e.target.value)}
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
          <div>
            <a href="/viewproduct">
              <Button variant="contained"> View Products</Button>
            </a>
          </div>
          <TextField
            label="Status"
            id="filled-size-normal"
            variant="filled"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Created Date"
            id="standard-size-small"
            size="small"
            variant="standard"
            onChange={(e) => setCdate(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="last Date"
            id="standard-size-small"
            size="small"
            variant="standard"
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={addOrder}>
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
