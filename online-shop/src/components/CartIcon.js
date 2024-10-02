// CartIcon.js
import React from "react";

const CartIcon = () => {
  const cartItemCount = 3; // Example item count, you can later add state or context for the actual cart count.

  return (
    <div className="cart-icon">
      <i className="fas fa-shopping-cart"></i>{" "}
      {/* FontAwesome or other icon library */}
      {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
    </div>
  );
};

export default CartIcon;
