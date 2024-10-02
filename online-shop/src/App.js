// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import "./scss/styles.scss";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // This will handle loading state
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://v2.api.noroff.dev/online-shop");
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      if (result && result.data && Array.isArray(result.data)) {
        setProducts(result.data);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Fetch products error:", error);
      setError(error.message);
    } finally {
      setLoading(false); // Ensure loading is set to false regardless of the outcome
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>; // Show a loading message
  if (error) return <div>Error: {error}</div>; // Handle errors gracefully

  return (
    <Router>
      <Layout products={products}>
        {" "}
        {/* Pass products to Layout */}
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />{" "}
          {/* Pass products to HomePage */}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
