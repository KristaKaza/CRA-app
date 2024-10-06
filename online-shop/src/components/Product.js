// Product.js
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="card h-100">
      {/* Product Image */}
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        {/* Product Title */}
        <h5 className="card-title">{product.title}</h5>

        {/* Product Description */}
        <p className="card-text">{product.description}</p>

        {/* Price (and discounted price if available) */}
        {product.discountedPrice ? (
          <p className="card-text">
            <span style={{ textDecoration: "line-through" }}>
              ${product.price}
            </span>{" "}
            <span style={{ color: "red" }}>${product.discountedPrice}</span>
          </p>
        ) : (
          <p className="card-text">Price: ${product.price}</p>
        )}

        {/* View Product button */}
        <Link to={`/product/${product.id}`} className="btn mt-auto view-btn">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default Product;
