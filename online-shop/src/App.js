import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import "./scss/styles.scss";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://v2.api.noroff.dev/online-shop");
      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      console.log("API response:", result);

      if (result && Array.isArray(result.data)) {
        setProducts(result.data);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Fetch products error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Load products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Calculate total cart items whenever the component renders
  useEffect(() => {
    const calculateCartItemCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = cart.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );
      setCartItemCount(totalItems);
    };

    calculateCartItemCount();
  }, []);

  // Show loader or error message while fetching
  if (loading) return <Loader />;

  // Handle error directly in the App.js
  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        <h4>Error: {error}</h4>
      </div>
    );
  }

  // Main return for when data has been fetched
  return (
    <Router>
      <Layout products={products} cartItemCount={cartItemCount}>
        <Helmet>
          <title>E-Com</title>
          <meta
            name="description"
            content="Your online shop for the best products."
          />
        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                products={products}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage setCartItemCount={setCartItemCount} />}
          />
          <Route path="/checkout" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
