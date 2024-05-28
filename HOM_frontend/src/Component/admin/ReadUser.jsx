import { AspectRatio } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadUser = () => {
  let [sellers, setSellers] = useState([]);
  let [buyers, setBuyers] = useState([]);

  const navigate = useNavigate();

  let getSellers = async () => {
    let result = await axios({
      url: "http://localhost:8000/sellers",
      method: "get",
    });
    setSellers(result.data.result);
  };
  let getBuyers = async () => {
    let result = await axios({
      url: "http://localhost:8000/buyers",
      method: "get",
    });
    setBuyers(result.data.result);
  };
  useEffect(() => {
    getSellers();
  }, []);
  useEffect(() => {
    getBuyers();
  }, []);
  let handleUpdate = (link) => () => {
    navigate(link);
  };

  let handleDelete = (url, getUser) => async () => {
    try {
      let result = await axios({
        url: url,
        method: "delete",
      });

      getUser();
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <h2>Sellers</h2>
      <Grid container spacing={2}>
        {sellers.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/admin/seller/${item._id}`);
                }}
              >
                <div style={{ position: "relative" }}>
                  <Typography variant="h6">
                    {" "}
                    {item.firstName},{item.lastName}
                  </Typography>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src={item.profileImage}
                    alt="seller"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </AspectRatio>
              </div>
              <CardContent orientation="horizontal">
                <Button
                  onClick={handleUpdate(`/admin/seller/update/${item._id}`)}
                >
                  Update
                </Button>
                <Button
                  onClick={handleDelete(
                    `http://localhost:8000/sellers/${item._id}`,
                    getSellers
                  )}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <h2>Buyers</h2>
      <Grid container spacing={2}>
        {buyers.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/admin/buyer/${item._id}`);
                }}
              >
                <div style={{ position: "relative" }}>
                  <Typography variant="h6">
                    {item.firstName},{item.lastName}
                  </Typography>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src={item.profileImage}
                    alt="seller"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </AspectRatio>
              </div>
              <CardContent orientation="horizontal">
                <Button
                  onClick={handleUpdate(`/admin/buyer/update/${item._id}`)}
                >
                  Update
                </Button>
                <Button
                  onClick={handleDelete(
                    `http://localhost:8000/buyers/${item._id}`,
                    getBuyers
                  )}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ReadUser;
