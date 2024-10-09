import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = ({ products, setCartItemCount }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  // Calculate discount if discountedPrice is less than the regular price
  const discount =
    product.discountedPrice < product.price
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : 0;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item is already in the cart
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if exists
    } else {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        discountedPrice: product.discountedPrice,
        image: product.image,
        quantity: 1, // Set initial quantity to 1
      };
      cart.push(newItem); // Add new item to cart
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
    setCartItemCount(cart.reduce((total, item) => total + item.quantity, 0)); // Update total item count
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          {/* Product Image */}
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="img-fluid mb-4"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />

          {/* Product Title */}
          <h1>{product.title}</h1>

          {/* Product Description */}
          <p className="lead">{product.description}</p>

          {/* Product Price and Discount */}
          <div className="price-info">
            {product.discountedPrice < product.price ? (
              <>
                <p>
                  <span style={{ textDecoration: "line-through" }}>
                    ${product.price}
                  </span>{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    ${product.discountedPrice}
                  </span>{" "}
                  <span className="text-success">({discount}% OFF)</span>
                </p>
              </>
            ) : (
              <p>Price: ${product.price}</p>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="btn mb-4 addCart" onClick={addToCart}>
            Add to Cart
          </button>

          {/* Reviews Section */}
          <div className="reviews text-start mt-5">
            <h3>Customer Reviews</h3>
            {product.reviews && product.reviews.length > 0 ? (
              <ul className="list-group">
                {product.reviews.map((review) => (
                  <li key={review.id} className="list-group-item mb-3">
                    <div>
                      <strong>{review.username}</strong>
                      <span className="text-warning ms-2">
                        {Array(review.rating).fill("★").join("")}
                      </span>
                    </div>
                    <p className="mb-0">{review.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
