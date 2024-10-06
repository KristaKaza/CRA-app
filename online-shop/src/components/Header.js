// Header.js
import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";

const Header = ({ products, cartItemCount }) => {
  // Add cartItemCount here
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link> {/* Link to Home */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Link to Contact */}
          </li>
        </ul>
        <SearchBar products={products} /> {/* Search bar component */}
        <CartIcon itemCount={cartItemCount} />{" "}
        {/* Pass item count to CartIcon */}
      </nav>
    </header>
  );
};

export default Header;
