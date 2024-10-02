// Layout.js
import React from "react";
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Assuming you also have a Footer component

const Layout = ({ children, products }) => {
  // Accept products as a prop
  return (
    <div>
      <Header products={products} /> {/* Pass products to Header */}
      <main>{children}</main> {/* Content of the page */}
      <Footer /> {/* Optional: If you want a footer */}
    </div>
  );
};

export default Layout;
