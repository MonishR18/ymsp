import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const WesternDressesPage = () => {
  return (
    <div className="category-page">
      <img src="OIP.jpg" alt="Western Dress" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
      <h1>Western Dresses</h1>
      <ProductList category="western dress" />
    </div>
  );
};

export default WesternDressesPage;
