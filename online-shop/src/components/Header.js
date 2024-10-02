// Header.js
import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon"; // Assuming you already have CartIcon component
import SearchBar from "./SearchBar"; // Importing the SearchBar component

const Header = ({ products }) => {
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
        <CartIcon /> {/* Cart icon displayed */}
      </nav>
    </header>
  );
};

export default Header;
