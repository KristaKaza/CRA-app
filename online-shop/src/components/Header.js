// Header.js
import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";

const Header = ({ products, cartItemCount }) => {
  return (
    <header className="container-fluid bg-light p-3 border-bottom">
      <div className="row align-items-center">
        {/* Logo */}
        <div className="col-md-3">
          <h1 className="h3 mb-0">E-Com</h1>
        </div>

        {/* Navigation Links */}
        <div className="col-md-6">
          <nav className="d-flex justify-content-center gap-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>

        {/* Search and Cart Icon */}
        <div className="col-md-3 d-flex">
          <SearchBar products={products} />
          <CartIcon itemCount={cartItemCount} />
        </div>
      </div>
    </header>
  );
};

export default Header;
