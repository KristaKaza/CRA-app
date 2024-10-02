// Header.js
import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon"; // Cart icon component we'll create next

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {/* Add other links if needed */}
        </ul>
      </nav>
      <CartIcon />
    </header>
  );
};

export default Header;
