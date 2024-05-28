import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";
import GetCategoryCard from "./GetCategoryCard";

const GetCategoryByBuyer = () => {
  let [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  let getCategory = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/categorys",
        method: "get",
      });
      setCategories(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <ToastContainer></ToastContainer>

      <Grid container spacing={2}>
        {categories.map((category, i) => {
          return <GetCategoryCard category={category}></GetCategoryCard>;
        })}
      </Grid>
    </div>
  );
};

export default GetCategoryByBuyer;
