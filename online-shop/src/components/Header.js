import { Collapse } from "bootstrap"; // Import Collapse directly
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = ({ products, cartItemCount }) => {
  const navRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the navbar
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        const collapseElement = document.getElementById("navbarNav");
        if (collapseElement && collapseElement.classList.contains("show")) {
          // Close the navbar if it's open
          const collapse = new Collapse(collapseElement, {
            toggle: false,
          });
          collapse.hide();
        }
      }
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
      const collapseElement = document.getElementById("navbarNav");
      if (collapseElement && collapseElement.classList.contains("show")) {
        const collapse = new Collapse(collapseElement, {
          toggle: false,
        });
        collapse.hide();
      }
    };

    // Add event listeners when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    navRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      navRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <header className="container-fluid p-3 border-bottom">
      <nav className="navbar navbar-expand-md navbar-light" ref={navRef}>
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand h3 mb-0">
            E-Com
          </Link>

          {/* Toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search and Cart Icon (Right-aligned) */}
            <div className="d-flex align-items-center flex-wrap">
              <SearchBar products={products} />
              <CartIcon itemCount={cartItemCount} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
