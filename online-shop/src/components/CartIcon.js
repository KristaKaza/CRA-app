// CartIcon.js
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Make sure this import is correct

const CartIcon = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <Link to="/cart">
        <FaShoppingCart size={24} />
        {itemCount > 0 && <span className="item-count">{itemCount}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;
