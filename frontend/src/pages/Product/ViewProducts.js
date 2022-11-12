import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";

export default function ViewProduct() {
  const [product, setProduct] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:9999/productmanagement`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRequest();
  }, [product]);
  return (
    <div>
      <div>
        <Header />
        {product.map((item) => (
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              marginLeft: "100px",
              display: "inline-block",
              width: "400px",
              marginTop: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="products.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Item Code : {item.itemcode}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Item Name : {item.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Item Price : {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Item Quantity : {item.quantity}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
