import { useState, useEffect, useContext } from "react";
import ProductService from "../services/ProductService";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AppContext from "../contexts/app";

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();
  const { setSelectedProduct, setSelectedProductSKU, setLoading, loading } =
    useContext(AppContext);
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [error, setError] = useState(null);
  const imagePath = "/resources/icons" + product.image;

  useEffect(() => {
    const fetchPriceInterval = setInterval(async () => {
      setLoading(true);
      if (!loading) {
        try {
          const data = await ProductService.getStockPriceBySKU(
            product.skus[0].code
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.skus]);

  const handleProductClick = () => {
    setSelectedProduct(product);
    setSelectedProductSKU(product.skus?.[0]);
    navigate(
      `/${product.id}-${product.brand.toLowerCase().replace(/\s/g, "-")}`
    );
  };

  if (error) {
    return (
      <div className="error-message">
        <p>
          An error occurred while fetching products. Please try again later.
        </p>
      </div>
    );
  }

  return (
    stock > 0 && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "14px 14px 8px 14px",
          backgroundColor: "background.paper",
          borderRadius:
            index % 2 === 0 ? "12px 32px 12px 12px" : "32px 12px 12px 12px",
          cursor: "pointer",
        }}
        onClick={handleProductClick}
      >
        <Typography variant="subtitle1">{product.brand}</Typography>
        <div style={{ margin: "auto" }}>
          <img src={imagePath} alt={product.name} width="122" height="122" />
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              minWidth: 0,
              mt: "2rem",
            }}
          >
            {price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "8px 0px 8px 0px",
              minWidth: 0,
              bottom: -14,
              right: -14,
            }}
          >
            <AddIcon sx={{ color: "white" }} />
          </Button>
        </Box>
      </Box>
    )
  );
};

export default ProductCard;
