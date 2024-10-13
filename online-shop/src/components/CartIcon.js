import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ itemCount }) => {
  return (
    <div className="position-relative ps-2">
      <Link to="/cart" className="text-dark" aria-label="Shopping Cart">
        <FaShoppingCart size={24} />
        {itemCount > 0 && (
          <span
            className="badge badge-danger position-absolute"
            style={{ top: "-10px", right: "-10px" }}
          >
            {itemCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
