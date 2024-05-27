import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const imageAvatar = "/resources/icons/Sin título-1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none", padding: 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ backgroundColor: "white", borderRadius: "12px" }} // Added styles
          >
            <MenuIcon />
          </IconButton>
          <Avatar src={imageAvatar} alt="User Avatar" />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <div>Drawer content</div>
      </Drawer>
    </>
  );
};

export default Navbar;
