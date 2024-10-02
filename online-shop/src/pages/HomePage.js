import React, { useEffect, useState } from "react";
import Product from "../components/Product"; // Ensure the correct path to the Product component

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://v2.api.noroff.dev/online-shop");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("Fetched Data:", result); // Logs the full response
      setProducts(result.data); // Ensure you're setting the data array
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Loading state
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Products check
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available.</div>;
  }

  // Displaying the fetched products
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} /> // Use Product component for each item
      ))}
    </div>
  );
};

export default HomePage;
