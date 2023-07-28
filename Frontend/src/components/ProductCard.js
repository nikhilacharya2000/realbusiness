import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      {/* Additional details or actions for the product card */}
    </div>
  );
};

export default ProductCard;
