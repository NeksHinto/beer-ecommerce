import React from "react";
import { Typography, Box } from "@mui/material";

const SectionTitle = ({ title }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}>
      <Typography variant="h3" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="body1" color="#646464" sx={{ cursor: "default" }}>
        See All
      </Typography>
    </Box>
  );
};

export default SectionTitle;
