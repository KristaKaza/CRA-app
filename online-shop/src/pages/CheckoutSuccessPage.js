import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div className="checkout-success">
      <h1>Checkout Successful!</h1>
      <p>Thank you for your order!</p>
      <Link to="/">
        <button>Go Back to Shopping</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
