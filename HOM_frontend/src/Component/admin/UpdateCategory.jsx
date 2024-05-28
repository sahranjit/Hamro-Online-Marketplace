import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Category from "./Category";

// pre-fill
//hit API in page load
//pre fill data
//update

const defaultTheme = createTheme();

let UpdateCategory = () => {
  // let [name, setName] = useState("");
  // let [image, setImage] = useState("");
  let [initialValue, setInitialValue] = useState({});

  let params = useParams();
  let navigate = useNavigate();

  let getCategory = async () => {
    let result = await axios({
      url: `http://localhost:8000/categorys/${params.id}`,
      method: "get",
    });
    let data = result.data.result;
    setInitialValue({
      name: data.name,
      image: data.image,
    });
  };
  useEffect(() => {
    getCategory();
  }, []);
  const handleSubmit = (data) => async (e) => {
    e.preventDefault();

    try {
      let result = await axios({
        url: `http://localhost:8000/categorys/${params.id}`,
        method: "patch",
        data: data,
      });
      navigate(`/admin/category`);
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer></ToastContainer>
      <Category
        initialValue={initialValue}
        handleSubmit={handleSubmit}
        buttonName="Update Category"
      ></Category>
    </ThemeProvider>
  );
};

export default UpdateCategory;
