// Layout.js
import React from "react";
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Assuming you also have a Footer component

const Layout = ({ children, products, cartItemCount }) => {
  // Add cartItemCount here
  return (
    <div>
      <Header products={products} cartItemCount={cartItemCount} />{" "}
      {/* Pass products and cartItemCount to Header */}
      <main>{children}</main> {/* Content of the page */}
      <Footer /> {/* Optional: If you want a footer */}
    </div>
  );
};

export default Layout;
