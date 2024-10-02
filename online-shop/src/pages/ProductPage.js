// ProductPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // Initial state is null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the product based on the ID
  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const result = await response.json();
      setProduct(result); // Assume the product data is directly in the result
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Show loading state while the data is being fetched
  if (loading) return <div>Loading product...</div>;

  // Show error if fetching failed
  if (error) return <div>Error: {error}</div>;

  // Safeguard if product is null or undefined
  if (!product) return <div>Product not found</div>;

  // Now that we have the product, render its details
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {/* Ensure price is available before using toFixed */}
      <p>Price: ${product.price ? product.price.toFixed(2) : "N/A"}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductPage;
