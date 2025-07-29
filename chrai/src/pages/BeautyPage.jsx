import React from 'react';
import ProductList from '../components/ProductList';
import '../pages/CategoryPages.css';

const BeautyPage = () => {
  return (
    <div className="category-page">
      <h1>Beauty</h1>
      <ProductList category="Beauty" />
    </div>
  );
};

export default BeautyPage;
