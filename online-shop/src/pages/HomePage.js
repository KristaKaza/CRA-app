// HomePage.js
import React from "react"; // Remove useEffect and useState
import Product from "../components/Product";
import { Link } from "react-router-dom";

const HomePage = ({ products }) => {
  // Accept products as a prop
  return (
    <div>
      <div className="products-grid">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <Product product={product} />
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
