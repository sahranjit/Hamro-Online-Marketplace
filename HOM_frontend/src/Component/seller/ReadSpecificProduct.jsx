import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadSpecificProduct = () => {
  let [data, setData] = useState({});
  let params = useParams();
  let getProduct = async () => {
    let result = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "get",
    });
    setData(result.data.result);
  };

  useEffect(() => {
    getProduct();
  }, []);

  /* 
   setCategory(data.category)
        setProductName(data.productName)
        setProductImage(data.productImage)
        setDescription(data.description)
        setPrice(data.price)
  
  
  */
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={data.productImage}
            alt="Product"
            style={{ width: "100%", height: "400px", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: "20px", textAlign: "left" }}>
            <Typography variant="h5" gutterBottom>
              {data.productName}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Price : NRs.{data.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Category : {data?.category?.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Description : {data.description}
            </Typography>
          </Paper>
          <Paper style={{ padding: "20px", textAlign: "left" }}>
            <Typography variant="h5" gutterBottom>
              {data?.user?.firstName + " " + data?.user?.lastName}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              email : {data?.user?.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              PhoneNumber : {data?.user?.phoneNumber}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Address : {data?.user?.address}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReadSpecificProduct;
