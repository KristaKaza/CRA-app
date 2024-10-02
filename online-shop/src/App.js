import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        {" "}
        {/* Header and Footer wrap around all routes */}
        <Routes>
          {/* Homepage displays the list of products */}
          <Route path="/" element={<HomePage />} />

          {/* Individual Product Page */}
          <Route path="/product/:id" element={<ProductPage />} />

          {/* Cart Page */}
          <Route path="/cart" element={<CartPage />} />

          {/* Checkout Success Page */}
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />

          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
