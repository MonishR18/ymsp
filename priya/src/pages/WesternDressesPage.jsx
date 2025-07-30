import React from 'react';
import ProductList from '../components/ProductList';
import WesternDressesCarousel from '../components/WesternDressesCarousel';
import './CategoryPages.css';

const WesternDressesPage = () => {
  return (
    <div className="category-page">
      <h1>Western Dresses</h1>
      <img src="/western.png" alt="Western Banner" style={{ width: '100%', marginTop: '30px', borderRadius: '8px' }} />
      <WesternDressesCarousel />
      <ProductList category="western dress" />
    </div>
  );
};

export default WesternDressesPage;
