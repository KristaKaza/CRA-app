// Product.js
import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image.url} alt={product.image.alt} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Removed View Product link from here */}
    </div>
  );
};

export default Product;
