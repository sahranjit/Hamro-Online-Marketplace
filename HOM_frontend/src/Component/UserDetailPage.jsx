import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const UserDetailPage = ({ data }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={data.profileImage}
            alt="User"
            style={{ width: "100%", height: "400px", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: "20px", textAlign: "left" }}>
            <Typography variant="h5" gutterBottom>
              {data.firstName} {data.lastName}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              {data.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              phoneNumber : {data.phoneNumber}
            </Typography>
            <Typography variant="body1" gutterBottom>
              address : {data.address}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDetailPage;
