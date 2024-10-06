// HomePage.js
import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const HomePage = ({ products }) => {
  return (
    <div>
      <div className="products-grid">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              {/* Render the Product component */}
              <Product product={product} />

              {/* View Product button, only rendered here */}
              <Link to={`/product/${product.id}`}>View Product</Link>
            </div>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
