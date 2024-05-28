import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import useLogout from "../../hook/useLogout";

const BuyerNavLink = () => {
  let logout = useLogout();
  let handleLogout = () => {
    logout("/", "buyerToken");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={NavLink}
            to="/buyer"
            style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
          >
            Hamro Online Marketplace
          </Typography>

          {/* <Button
            color="inherit"
            component={NavLink}
            to="/buyer/product"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Products
          </Button> */}

          <Button
            color="inherit"
            component={NavLink}
            to="/buyer/profile"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Profile
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/buyer/profile/update"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Update Profile
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/buyer/profile/update-password"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Update Password
          </Button>
          <Button
            color="inherit"
            onClick={handleLogout}
            style={{
              textDecoration: "none",
              color: "inherit",
              marginRight: "20px",
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default BuyerNavLink;

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

/* 
    My profile
    Update profile
    Update password
    Logout
    Product
    
    
    
    */
