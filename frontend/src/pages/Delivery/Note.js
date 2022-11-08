import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";

export default function Note() {
  return (
    <div>
      <Header />
      <h1>Delivery Note</h1>
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
          <TextField label="Quantity" id="outlined-size-small" size="small" />
          <TextField label="Delivery Date" id="outlined-size-normal" />
        </div>
        <div>
          <TextField
            label="Received Date"
            id="filled-size-small"
            variant="filled"
            size="small"
          />
          <TextField
            label="Delivery Cost"
            id="filled-size-normal"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            label="Total Cost"
            id="standard-size-small"
            size="small"
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
}
