import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container mt-5">
      <Helmet>
        <title>Your Cart - E-Com Shop</title>
        <meta
          name="description"
          content="View the items in your cart and proceed to checkout."
        />
      </Helmet>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <>
              <ul className="list-group mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-md-3 text-center">
                        <img
                          src={item.image.url}
                          alt={item.image.alt}
                          className="cart-item-image img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5>{item.title}</h5>

                        {/* Display discounted price if available */}
                        {item.discountedPrice &&
                        item.discountedPrice !== item.price ? (
                          <p className="card-text">
                            <span className="original-price">
                              ${item.price.toFixed(2)}
                            </span>
                            <span className="discounted-price">
                              ${item.discountedPrice.toFixed(2)}
                            </span>
                          </p>
                        ) : (
                          <p>Price: ${item.price.toFixed(2)}</p>
                        )}

                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <h3 className="mb-3">
                  Total: $
                  {cart
                    .reduce(
                      (total, item) =>
                        total +
                        (item.discountedPrice || item.price) *
                          (item.quantity || 1),
                      0
                    )
                    .toFixed(2)}
                </h3>
                <button className="btn checkout" onClick={handleCheckout}>
                  Checkout
                </button>
                <Link to="/" className="btn btn-secondary ms-2">
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
