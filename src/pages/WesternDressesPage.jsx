import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const WesternDressesPage = () => {
  return (
    <div className="category-page">
      <h1>Western Dresses</h1>
      <ProductList category="western dress" />
    </div>
  );
};

export default WesternDressesPage;
