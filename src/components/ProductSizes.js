import React, { useContext, useState } from "react";
import { Typography, Box, Chip } from "@mui/material";
import theme from "../styles/theme";
import AppContext from "../contexts/app";

const ProductSizes = ({ skus }) => {
  const { setSelectedProductSKU, selectedProductSKU } = useContext(AppContext);

  const handleSkuClick = (sku) => {
    setSelectedProductSKU(sku);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="subtitle2">Size</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skus.map((sku) => (
          <Chip
            key={sku.code}
            label={sku.name}
            variant="outlined"
            clickable
            onClick={() => handleSkuClick(sku)}
            sx={
              selectedProductSKU?.code === sku.code
                ? {
                    border: `1px solid ${theme.palette.primary.main}`,
                    color: (theme) => theme.palette.primary.main,
                  }
                : {}
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductSizes;
