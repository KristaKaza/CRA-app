import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // Calculate discount if discountedPrice is less than the regular price
  const discount =
    product.discountedPrice < product.price
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : 0;

  return (
    <div className="card h-100">
      {/* Product Image */}
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="cardImg"
      />

      <div className="card-body d-flex flex-column">
        {/* Product Title */}
        <h5 className="card-title">{product.title}</h5>

        {/* Product Description */}
        <p className="card-text">{product.description}</p>

        {/* Price (and discounted price if available) */}
        {product.discountedPrice && product.discountedPrice < product.price ? (
          <p className="card-text">
            {/* Original Price with strikethrough */}
            <span className="text-decoration-line-through">
              ${product.price.toFixed(2)}
            </span>{" "}
            {/* Discounted Price */}
            <span className="text-danger">
              ${product.discountedPrice.toFixed(2)}
            </span>{" "}
            {/* Discount Percentage */}
            <span className="text-success">({discount}% OFF)</span>
          </p>
        ) : (
          <p className="card-text">Price: ${product.price.toFixed(2)}</p>
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
