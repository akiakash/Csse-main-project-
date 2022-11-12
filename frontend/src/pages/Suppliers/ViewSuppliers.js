import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function ViewSuppliers() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [order, setOrder] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:9999/supplymanagement`)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [order]);
  return (
    <div>
      <div className="search">
        <TextField
          id="outlined-multiline-flexible"
          label="Search"
          multiline
          style={{ width: "300px", marginTop: "20px", paddingBottom: "20px" }}
          onChange={(e) => {}}
        />
      </div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}></TableCell>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ top: 57 }}>Supplier code</TableCell>
                <TableCell style={{ top: 57 }}>Address</TableCell>
                <TableCell style={{ top: 57 }}>Item code</TableCell>
                <TableCell style={{ top: 57 }}>Quantity</TableCell>
                <TableCell style={{ top: 57 }}>Unit Price</TableCell>
                <TableCell style={{ top: 57 }}>Total Price</TableCell>
                <TableCell style={{ top: 57 }}>watch</TableCell>
                <TableCell style={{ top: 57 }}>Deliver Note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox">
                      <TableCell>{row.suppliercode}</TableCell>
                      <TableCell>{row.address}</TableCell>
                      <TableCell>{row.itemcode}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.unitprice}</TableCell>
                      <TableCell>{row.totalprice}</TableCell>
                      <TableCell>
                        <a href="/vieworder">
                          <Button variant="contained"> Watch</Button>{" "}
                        </a>
                      </TableCell>
                      <TableCell>
                        <a href="/deliverynote">
                          <Button variant="contained"> Action</Button>{" "}
                        </a>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
