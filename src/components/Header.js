import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <div style={{ marginTop: 5, marginBottom: 15 }}>
      <Typography variant="body1" color="text.secondary">
        Hi Mr. Michael,
      </Typography>
      <Typography variant="h1">Welcome back!</Typography>
    </div>
  );
};

export default Header;
