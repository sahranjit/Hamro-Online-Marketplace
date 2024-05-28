import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const GetCategoryCard = ({ category }) => {
  let navigate = useNavigate();

  let handleClick = (id) => () => {
    navigate(`/buyer/product?category=${id}`);
  };
  return (
    <Grid item xs={12} sm={6} md={4} key={category._id}>
      <Card onClick={handleClick(category._id)}>
        <div style={{ position: "relative" }}>
          <Typography variant="h6">{category.name}</Typography>
        </div>
        <img
          src={category.image}
          style={{
            minHeight: "120px",
            maxHeight: "200px",
            width: "100%",
          }}
          alt="category image"
        ></img>
      </Card>
    </Grid>
  );
};

export default GetCategoryCard;
