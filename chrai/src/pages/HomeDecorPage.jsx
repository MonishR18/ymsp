import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const HomeDecorPage = () => {
  return (
    <div className="category-page">
      <h1>Home Decor</h1>
      <ProductList category="Home Decor" />
    </div>
  );
};

export default HomeDecorPage;
