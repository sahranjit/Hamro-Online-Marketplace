import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const ReadProductByAdmin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const result = await axios.get("http://localhost:8000/products");
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
    navigate(`/admin/product/update/${id}`);
  };

  const handleView = (id) => () => {
    navigate(`/admin/product/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {products.map((item) => (
        <Product
          item={item}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleView={handleView}
          role="admin"
        ></Product>
      ))}
    </Grid>
  );
};

export default ReadProductByAdmin;
