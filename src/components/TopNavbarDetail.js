import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TopNavbarDetail = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton href="/" color="inherit">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h3" noWrap component="h2">
          Detail
        </Typography>
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbarDetail;
