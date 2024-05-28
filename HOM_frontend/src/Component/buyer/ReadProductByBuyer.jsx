import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Product from "../Product";

const ReadProductByBuyer = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  let [sort, setSort] = useState("price");

  let [query, setQuery] = useState("");

  let [searchQuery, setSearchQuery] = useSearchParams();
  console.log(searchQuery.get("category"));

  // useEffect(()=>{
  //   Object.keys(params)

  // },[])

  //{category:"11111", price:1000}

  // "category=11111&&price1000"

  const getProducts = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8000/products?sort=${sort}&category=${searchQuery.get(
          "category"
        )}`
      );
      setProducts(result.data.result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [sort]);

  const handleDelete = (id) => async () => {
    try {
      await axios.delete(`http://localhost:8000/products/${id}`);
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdate = (id) => () => {
    navigate(`/product/update/${id}`);
  };

  const handleView = (id) => () => {
    navigate(`/buyer/product/${id}`);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleSort}
        >
          <MenuItem value="price">Low to High</MenuItem>
          <MenuItem value="-price">High to Low</MenuItem>
          <MenuItem value="-createdAt">Latest</MenuItem>
          <MenuItem value="createdAt">Old</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        {products.map((item) => (
          <Product
            item={item}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleView={handleView}
            role="buyer"
          ></Product>
        ))}
      </Grid>
    </div>
  );
};

export default ReadProductByBuyer;
