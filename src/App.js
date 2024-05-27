import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";
import theme from "./styles/theme";
import { CssBaseline } from "@mui/material/";
import { AppContextProvider } from "./contexts/app";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:product" element={<DetailPage />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
