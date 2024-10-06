// CartPage.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CartPage = ({ setCartItemCount }) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Clear the cart in localStorage
    localStorage.removeItem("cart");

    // Reset cart item count to 0
    setCartItemCount(0);

    // Navigate to the checkout success page
    navigate("/checkout");
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <img
                  src={item.image.url}
                  alt={item.title}
                  style={{ width: "100px" }}
                />
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
          <h3>
            Total: $
            {cart
              .reduce(
                (total, item) => total + item.price * (item.quantity || 1),
                0
              )
              .toFixed(2)}
          </h3>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
