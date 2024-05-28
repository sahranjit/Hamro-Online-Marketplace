import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Category from "./Category";

// pre-fill
//hit API in page load
//pre fill data
//update

const defaultTheme = createTheme();

let CreateCategory = () => {
  // let [name, setName] = useState("");
  // let [image, setImage] = useState("");

  let initialValue = {
    name: "",
    image: "",
  };

  let navigate = useNavigate();

  const handleSubmit = (data) => async (e) => {
    e.preventDefault();

    try {
      let result = await axios({
        url: `http://localhost:8000/categorys/`,
        method: "post",
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
        buttonName="Add Category"
      ></Category>
    </ThemeProvider>
  );
};

export default CreateCategory;
