import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import ProductCard from '../components/ProductCard';
import './whishlistpage.css';

const WhistlistPage = () => {
  const { wishlistItems } = useContext(CartContext);

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-products">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WhistlistPage;
