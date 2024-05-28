import { AspectRatio } from "@mui/joy";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Product = ({ item, handleDelete, handleUpdate, handleView, role }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={item._id}>
      <Card>
        <div onClick={handleView(item._id)} style={{ cursor: "pointer" }}>
          <div style={{ position: "relative" }}>
            <Typography variant="h6">{item.productName}</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={item.productImage}
              alt="product"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </AspectRatio>
        </div>
        <CardContent>
          <Typography variant="body1">
            Total price: NRs. {item.price}
          </Typography>
          {role === "seller" && (
            <CardContent orientation="horizontal">
              <Button onClick={handleUpdate(item._id)}>Update</Button>
              <Button onClick={handleDelete(item._id)}>Delete</Button>
            </CardContent>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
