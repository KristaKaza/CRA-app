// ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({ products, setCartItemCount }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

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
    <div>
      <h1>{product.title}</h1>
      <img src={product.image.url} alt={product.title} />
      <p>Price: ${(product.discountedPrice || product.price).toFixed(2)}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
