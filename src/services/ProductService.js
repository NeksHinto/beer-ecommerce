// import axios from "axios";
import { default as products } from "../constants/products";
import { default as stockPrices } from "../constants/stock-price";
import formatPrice from "../utils/formatPrice.js";

// const BASE_URL = "https://minutentag.com";

const fetchAllProducts = async () => {
  return products;
};

const fetchProductById = async (productId) => {
  const product = products.find((item) => item.id === parseInt(productId));
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const fetchStockPriceBySKU = async (skuCode) => {
  if (!stockPrices[skuCode]) {
    throw new Error("Stock information not found");
  }
  const stockInfo = stockPrices[skuCode];
  const formattedPrice = formatPrice(stockInfo.price);
  const stockAndPriceInfoFormatted = {
    ...stockInfo,
    price: formattedPrice,
  };
  return stockAndPriceInfoFormatted;
};

class ProductService {
  static async getAllProducts() {
    try {
      return await fetchAllProducts();
      // API endpoint
      // const response = await axios.get(`${BASE_URL}/api/products`);
      // return response.data;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  }

  static async getProductById(productId) {
    try {
      return await fetchProductById(productId);
      // API endpoint
      // const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
      // return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      throw error;
    }
  }

  static async getStockPriceBySKU(skuCode) {
    try {
      return await fetchStockPriceBySKU(skuCode);
      // API endpoint
      // const response = await axios.get(`${BASE_URL}/api/stock-price/${skuCode}`);
      // return response.data;
    } catch (error) {
      console.error("Error fetching stock price:", error);
      throw error;
    }
  }
}

export default ProductService;
