import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  return (
    <div className="search-bar">
      {/* Add a label for the input */}
      <label htmlFor="product-search" className="visually-hidden">
        Search products
      </label>
      <input
        type="text"
        id="product-search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      {filteredProducts.length > 0 && (
        <ul className="search-results">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link
                to={`/product/${product.id}`}
                onClick={() => setSearchTerm("")}
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
