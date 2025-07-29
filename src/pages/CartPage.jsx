import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, wishlistItems, addToCart, toggleWishlist, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                  <div className="cart-item-actions">
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                    <button onClick={() => toggleWishlist(product)}>
                      {wishlistItems.some(item => item.id === product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Price Details</h3>
            <p>Total Price: ₹{totalPrice}</p>
            <button className="checkout-btn" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
