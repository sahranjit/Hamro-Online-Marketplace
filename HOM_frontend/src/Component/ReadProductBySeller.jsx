import { Grid } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import { getLocalStorage } from "../utils/localStorage";
import { Context1 } from "../App";

const ReadProductBySeller = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  let context = useContext(Context1);

  const getProducts = async () => {
    try {
      const result = await axios({
        url: `http://localhost:8000/products/seller`,
        method: "get",
        headers: {
          Authorization: `Bearer ${context.token.sellerToken}`,
        },
      });

      console.log("result", result);

      // const result = await axios.get("http://localhost:8000/products");
      setProducts(result.data.result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (id) => async () => {
    try {
      await axios.delete(`http://localhost:8000/products/${id}`);
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdate = (id) => () => {
    navigate(`/seller/product/update/${id}`);
  };

  const handleView = (id) => () => {
    navigate(`/seller/product/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {products.map((item) => (
        <Product
          item={item}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleView={handleView}
          role="seller"
        ></Product>
      ))}
    </Grid>
  );
};

export default ReadProductBySeller;
