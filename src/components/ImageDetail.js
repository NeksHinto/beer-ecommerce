import React from "react";

const ProductImage = ({ image, alt }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={image}
        alt={alt}
        style={{ width: 240, height: 240, objectFit: "cover", my: 3 }}
      />
    </div>
  );
};

export default ProductImage;
