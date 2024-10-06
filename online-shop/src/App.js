// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import Layout from "./components/Layout";
import "./scss/styles.scss";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      if (result && result.data && Array.isArray(result.data)) {
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

  useEffect(() => {
    fetchProducts();
  }, []);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <Layout products={products} cartItemCount={cartItemCount}>
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
