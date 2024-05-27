import React from "react";
import { Box, Button } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const BottomDetail = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
      <Button
        color="primary"
        variant="outlined"
        sx={{
          width: 54,
          height: 54,
          borderRadius: "12px",
          minWidth: 0,
        }}
      >
        <ShoppingBagOutlinedIcon />
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ flexGrow: 1, color: "white" }}
      >
        Add to cart
      </Button>
    </Box>
  );
};

export default BottomDetail;
