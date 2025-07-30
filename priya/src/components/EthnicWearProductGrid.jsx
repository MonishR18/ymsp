import React from 'react';
import './EthnicWearProductGrid.css';

const products = [
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ksKVvN53Gd68hTDwoAHFvlA5Ar5mfeUt1A&s',
    title: 'salwar kameez',
    price: 5999,
  },
  {
    id: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FxurOfabhjQovEOEBZluXJ9B1mhRtn0Epg&s',
    title: 'lehenga choli',
    price: 3999,
  },
  {
    id: 3,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeb6ZS-VZNIDZ6CfhSd6eU843n8o62Y72s3w&s',
    title: 'saree',
    price: 4599,
  },
  {
    id: 4,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTeWmvo_SbSdEFSGyL-PsyeSf9krR2-Fokg&s',
    title: 'kurta set',
    price: 1499,
  },
];

const EthnicWearProductGrid = () => {
  return (
    <div className="ethnic-product-grid">
      {products.map(({ id, imageUrl, title, price }) => (
        <div key={id} className="product-card">
          <div className="product-image-wrapper">
            <img src={imageUrl} alt={title} className="product-image" />
          </div>
          <h3 className="product-title">{title}</h3>
          <p className="product-price">₹{price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default EthnicWearProductGrid;
