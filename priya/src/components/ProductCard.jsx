import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css"; // For styling
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart, wishlistItems, toggleWishlist } = useContext(CartContext);

  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <span className="wishlist-icon" onClick={() => toggleWishlist(product)} style={{ cursor: "pointer", marginLeft: "10px" }}>
        {isInWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
      </span>
    </div>
  );
};

export default ProductCard;
