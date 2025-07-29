import React from 'react';
import ProductList from '../components/ProductList';
import '../pages/CategoryPages.css';

const AccessoriesPage = () => {
  return (
    <div className="category-page">
      <h1>Accessories</h1>
      <ProductList category="Accessories" />
    </div>
  );
};

export default AccessoriesPage;
