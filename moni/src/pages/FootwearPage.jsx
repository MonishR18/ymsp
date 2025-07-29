import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const FootwearPage = () => {
  return (
    <div className="category-page">
      <h1>Footwear</h1>
      <ProductList category="Footwear" />
    </div>
  );
};

export default FootwearPage;
