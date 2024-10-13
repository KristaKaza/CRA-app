// HomePage.js
import React from "react";
import Product from "../components/Product";
import { Helmet } from "react-helmet";

const HomePage = ({ products }) => {
  return (
    <div className="container mt-5">
      <Helmet>
        <title>Home - E-Com</title>
        <meta
          name="description"
          content="Welcome to E-Com, your online shop for the best products."
        />
      </Helmet>

      <h2 className="text-center mb-4">Featured Products</h2>

      <div className="row">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <Product product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">No products available</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
