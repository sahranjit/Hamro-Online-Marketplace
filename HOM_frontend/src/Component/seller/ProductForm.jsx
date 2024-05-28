import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropZoneComponent from "../DropZoneComponent";
import { useMemo } from "react";

const defaultTheme = createTheme();

let ProductForm = ({ initialValue, handleSubmit, title }) => {
  let [category, setCategory] = useState("");
  let [productName, setProductName] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");
  let [productImage, setProductImage] = useState("");
  let [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategory(initialValue.category);
    setProductName(initialValue.productName);
    setDescription(initialValue.description);
    setPrice(initialValue.price);
    setProductImage(initialValue.productImage);
  }, [initialValue]);

  console.log("****", category);

  let data = useMemo(() => {
    return {
      category,
      productName,
      description,
      price,
      productImage,
      categoryList,
    };
  });

  let getCategoryList = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/categorys",
        method: "get",
      });
      setCategoryList(result.data.result);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="bg">
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer></ToastContainer>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(data)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="productName"
                    label="Product Name"
                    name="productName"
                    autoComplete="product-name"
                    value={productName}
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="price"
                    label="Price"
                    type="text"
                    id="price"
                    autoComplete="new-price"
                    value={price}
                    autoFocus
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      label="Age"
                    >
                      {categoryList.map((item, i) => {
                        return (
                          <MenuItem value={item._id}>{item.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <DropZoneComponent
                    image={productImage}
                    setImage={setProductImage}
                  ></DropZoneComponent>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {title}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default ProductForm;
