import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import ProductService from "../services/ProductService";
import AppContext from "../contexts/app";

const ProductSummary = ({ product }) => {
  const { selectedProductSKU, loading, setLoading, setError } =
    useContext(AppContext);
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const fetchPriceInterval = setInterval(async () => {
      setLoading(true);
      if (!loading) {
        try {
          const data = await ProductService.getStockPriceBySKU(
            selectedProductSKU.code ?? product.skus[0].code
          );
          setPrice(data.price);
          setStock(data.stock);
        } catch (error) {
          setError(error.message);
          console.error("Error fetching stock price:", error);
        } finally {
          setLoading(false);
        }
      }
    }, 5000);
    return () => clearInterval(fetchPriceInterval);
  }, [selectedProductSKU]);

  return (
    <Grid container spacing={1} sx={{ my: 2 }}>
      <Grid item xs={8}>
        <Grid item>
          <Typography variant="h1">{product.brand}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ display: "flex", justifyContent: "end", height: "100%" }}>
          <Typography variant="h1" color="primary.main">
            ${price}
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="text.disabled">
          {`Origin: ${product.origin} | Stock: ${stock}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductSummary;
