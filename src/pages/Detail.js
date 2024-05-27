import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import TopNavbarDetail from "../components/TopNavbarDetail";
import ProductSummary from "../components/ProductSummary";
import ProductDescription from "../components/ProductDescription";
import ProductSizes from "../components/ProductSizes";
import BottomDetail from "../components/BottomDetail";
import ImageDetail from "../components/ImageDetail";
import getProductFromUrl from "../utils/getProductIdFromUrl";
import { Container, Box } from "@mui/material";
import AppContext from "../contexts/app";

const DetailPage = () => {
  const {
    loading,
    setLoading,
    error,
    setError,
    setSelectedProduct,
    selectedProduct,
  } = useContext(AppContext);
  const { product } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const data = await ProductService.getProductById(
          getProductFromUrl(product)
        );
        setSelectedProduct(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (error) {
    return (
      <div className="error-message">
        <p>
          An error occurred while fetching product details. Please try again
          later.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-message">
        <p>Loading products...</p>
      </div>
    );
  }

  if (!selectedProduct) {
    return <div>Loading product details...</div>;
  }

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
    <React.Fragment>
      <TopNavbarDetail />
      <Container>
        {selectedProduct && selectedProduct.image && (
          <ImageDetail
            src={
              selectedProduct.image
                ? "/resources/icons" + selectedProduct.image
                : "/placeholder.jpg"
            }
            alt={selectedProduct.brand}
          />
        )}
      </Container>
      <Box
        sx={{
          backgroundColor: "background.paper",
          paddingX: "14px",
          paddingY: 2,
          borderRadius: "48px 48px 0px 0px",
        }}
      >
        <ProductSummary product={selectedProduct} />
        <ProductDescription description={selectedProduct.information} />
        <ProductSizes skus={selectedProduct.skus} />
        <BottomDetail />
      </Box>
    </React.Fragment>
  );
};

export default DetailPage;
