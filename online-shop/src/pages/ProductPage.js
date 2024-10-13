import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = ({ products, setCartItemCount }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  console.log("Product Data: ", product); // Log the product data

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

    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        discountedPrice: product.discountedPrice,
        image: product.image,
        quantity: 1,
      };
      cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItemCount(cart.reduce((total, item) => total + item.quantity, 0));
  };

  return (
    <div className="container mt-5">
      {/* Helmet for setting dynamic page title and meta description */}
      <Helmet>
        <title>{product.title} - E-Com Shop</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          {/* Product Image */}
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="img-fluid mb-4 product-image"
          />

          {/* Product Title */}
          <h1 className="mb-3">{product.title}</h1>

          {/* Product Description */}
          <p className="lead mb-4">{product.description}</p>

          {/* Product Price and Discount */}
          <div>
            {product.discountedPrice < product.price ? (
              <p>
                <span className="text-decoration-line-through text-muted me-2">
                  ${product.price}
                </span>
                <span className="text-danger fw-bold">
                  ${product.discountedPrice}
                </span>{" "}
                <span className="text-success">({discount}% OFF)</span>
              </p>
            ) : (
              <p>Price: ${product.price}</p>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="btn addCart mb-4" onClick={addToCart}>
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
