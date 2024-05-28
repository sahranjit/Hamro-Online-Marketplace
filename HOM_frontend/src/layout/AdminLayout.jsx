import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../utils/localStorage";
import { useContext } from "react";
import { Context1 } from "../App";
import { useEffect } from "react";
import useLogout from "../hook/useLogout";

const drawerWidth = 240;

let items1 = [
  {
    name: "Product",
    navigate: "/admin/product",
  },
  {
    name: "Add Category",
    navigate: "/admin/category/create",
  },
  {
    name: "Category",
    navigate: "/admin/category",
  },
  {
    name: "User",
    navigate: "/admin/user",
  },
];

let items2 = [
  {
    name: "Profile",
    navigate: "/admin/profile",
  },
  {
    name: "Update Profile",
    navigate: "/admin/profile/update",
  },
  {
    name: "Update Password",
    navigate: "/admin/profile/update-password",
  },
];

const AdminLayout = ({ children }) => {
  let navigate = useNavigate();
  let logout = useLogout();

  let context = useContext(Context1);

  useEffect(() => {
    if (!context.token.adminToken) {
      navigate("/admin/login");
    }
  }, []);

  let handleLogout = () => {
    logout("/", "adminToken");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {items1.map((item, index) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon> */}
                  <ListItemText
                    primary={item.name}
                    onClick={() => {
                      navigate(item.navigate);
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {items2.map((item, index) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={item.name}
                    onClick={() => {
                      navigate(item.navigate);
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={"Logout"} onClick={handleLogout} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
