// HomePage.js
import React from "react";
import Product from "../components/Product";

const HomePage = ({ products }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              {/* Render the Product component */}
              <Product product={product} />
            </div>
          ))
        ) : (
          <div className="col-12">No products available</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
