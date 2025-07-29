import React from 'react';
import ProductList from '../components/ProductList';
import '../pages/CategoryPages.css';

const AccessoriesPage = () => {
  return (
    <div className="category-page">
      <img src="accessories.jpg" alt="Accessories" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
      <h1>Accessories</h1>
      <ProductList category="Accessories" />
    </div>
  );
};

export default AccessoriesPage;
