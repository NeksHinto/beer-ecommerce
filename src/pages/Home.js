import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import SectionTitle from "../components/SectionTitle";
import Filters from "../components/Filters";
import BottomNavbar from "../components/BottomNavbar";
import ProductCard from "../components/ProductCard";
import { Container, Grid } from "@mui/material";
import AppContext from "../contexts/app";

const HomePage = () => {
  const { loading, error, products } = useContext(AppContext);

  if (error) {
    return (
      <div className="error-message">
        <p>
          An error occurred while fetching products. Please try again later.
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

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Header />
        <Searchbar />
        <SectionTitle title="Drink Category" />
        <Filters />
        <SectionTitle title="Popular" />
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={6} key={product.id}>
              <ProductCard product={product} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default HomePage;
