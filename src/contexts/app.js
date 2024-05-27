import React, { createContext, useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import ProductService from "../services/ProductService";

const initialContext = {
  isMobile: false,
  products: [],
  setProducts: () => {},
  selectedProduct: "",
  setSelectedProduct: () => {},
  selectedProductSKU: {},
  setSelectedProductSKU: () => {},
  selectedSection: null,
  setSelectedSection: () => {},
  selectedFilter: null,
  setSelectedFilter: (filter) => {},
  loading: true,
  error: false,
};

const AppContext = createContext(initialContext);

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductSKU, setSelectedProductSKU] = useState({});
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSection, setSelectedSection] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchAllProducts = async () => {
    const data = await ProductService.getAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const value = {
    products,
    setProducts,
    selectedProduct,
    setSelectedProduct,
    selectedProductSKU,
    setSelectedProductSKU,
    selectedFilter,
    setSelectedFilter,
    selectedSection,
    setSelectedSection,
    isMobile,
    loading,
    setLoading,
    error,
    setError,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
