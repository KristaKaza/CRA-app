// Product.js
import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      {/* Product Image */}
      <img src={product.image.url} alt={product.image.alt} />

      {/* Product Title */}
      <h3>{product.title}</h3>

      {/* Product Description */}
      <p>{product.description}</p>

      {/* Price (and discounted price if available) */}
      {product.discountedPrice ? (
        <p>
          <span style={{ textDecoration: "line-through" }}>
            ${product.price}
          </span>{" "}
          <span style={{ color: "red" }}>${product.discountedPrice}</span>
        </p>
      ) : (
        <p>Price: ${product.price}</p>
      )}
    </div>
  );
};

export default Product;
