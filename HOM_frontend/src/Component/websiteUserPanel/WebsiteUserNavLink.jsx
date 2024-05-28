import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const WebsiteUserNavLink = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
          >
            Hamro Onile Marketplace 
          </Typography>

          <Button
            color="inherit"
            component={NavLink}
            to="/seller/register"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Seller Register
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/buyer/register"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Buyer Register
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/seller/login"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Seller Login
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/buyer/login"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Buyer Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default WebsiteUserNavLink;

/* 
 <div>
      <NavLink to="/seller/register" style={{ marginRight: "20px" }}>
        Seller Register
      </NavLink>
      <NavLink to="/buyer/register" style={{ marginRight: "20px" }}>
        Buyer Register
      </NavLink>
      <NavLink to="/seller/login" style={{ marginRight: "20px" }}>
        Login as seller
      </NavLink>
      <NavLink to="/buyer/login" style={{ marginRight: "20px" }}>
        Login as buyer
      </NavLink>
      <NavLink to="/product" style={{ marginRight: "20px" }}>
        Product
      </NavLink>
      <NavLink to="/admin/category" style={{ marginRight: "20px" }}>
        Get Category{" "}
      </NavLink>
    </div>
 */
