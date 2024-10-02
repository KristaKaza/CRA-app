// Product.js
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image?.url}
        alt={product.image?.alt || "Product image"}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Discounted Price: ${product.discountedPrice.toFixed(2)}</p>
      <p>Rating: {product.rating}</p>

      {/* Link to the product page */}
      <Link to={`/product/${product.id}`}>View Product</Link>
    </div>
  );
};

export default Product;
