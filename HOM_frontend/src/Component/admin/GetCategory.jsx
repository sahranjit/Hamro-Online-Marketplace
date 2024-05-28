import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";

const GetCategory = () => {
  let [categories, setCategories] = useState([]);
  let navigate = useNavigate();
  //hit api
  //api gives data
  // set data to category
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

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/categorys/${productId}`);
      getCategory();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div>
      <ToastContainer></ToastContainer>

      <Grid container spacing={2}>
        {categories.map((item, i) => {
          console.log(item);
          return (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Card>
                <div style={{ position: "relative" }}>
                  <Typography variant="h6">{item.name}</Typography>
                </div>

                <img
                  src={item.image}
                  style={{
                    minHeight: "120px",
                    maxHeight: "200px",
                    width: "100%",
                  }}
                  alt="category image"
                ></img>
                <CardContent>
                  <Button
                    onClick={() => handleDelete(item._id)}
                    variant="outlined"
                    color="error"
                    style={{ marginRight: "20px" }}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() =>
                      navigate(`/admin/category/update/${item._id}`)
                    }
                    variant="outlined"
                    color="primary"
                  >
                    Update
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default GetCategory;
