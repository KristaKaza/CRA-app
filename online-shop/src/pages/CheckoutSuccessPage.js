import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CheckoutSuccessPage = () => {
  return (
    <div className="checkout-success">
      <Helmet>
        <title>Checkout Success - E-Com Shop</title>
        <meta
          name="description"
          content="Thank you for your purchase. Your checkout was successful!"
        />
      </Helmet>

      <h1>Checkout Successful!</h1>
      <p>Thank you for your order!</p>
      <Link to="/">
        <button className="btn checkout">Go Back to Shopping</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
