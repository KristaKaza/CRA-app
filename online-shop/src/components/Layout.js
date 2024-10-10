// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, products, cartItemCount }) => {
  // Add cartItemCount here
  return (
    <div>
      <Header products={products} cartItemCount={cartItemCount} />{" "}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
