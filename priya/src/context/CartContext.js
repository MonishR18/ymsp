import react, { createContext, useState } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  }

  const toggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      if (prevItems.some(item => item.id === product.id)) {
        return prevItems.filter(item => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart, wishlistItems, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
}