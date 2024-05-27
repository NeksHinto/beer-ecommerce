import React, { useContext } from "react";
import { Typography, Box, Link } from "@mui/material";
import AppContext from "../contexts/app";

const ProductDescription = ({ description }) => {
  const { isMobile } = useContext(AppContext);
  const MAX_LINES = 4;
  const MOBILE_CHARS = 48;
  const DESKTOP_CHARS = 120;

  const handleReadMoreClick = () => {
    console.log("Read More clicked");
  };

  const characters = isMobile ? MOBILE_CHARS : DESKTOP_CHARS;

  return (
    <Box>
      <Typography variant="subtitle2">Description</Typography>
      <Typography variant="body1">
        {description.length > MAX_LINES * characters
          ? `${description.substring(0, MAX_LINES * characters)}...`
          : description}
        {description.length > MAX_LINES * 16 && (
          <Link href="#" color="primary.main" onClick={handleReadMoreClick}>
            Read more
          </Link>
        )}
      </Typography>
    </Box>
  );
};

export default ProductDescription;
