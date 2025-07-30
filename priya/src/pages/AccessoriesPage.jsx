import React from 'react';
import ProductList from '../components/ProductList';
import '../pages/CategoryPages.css';

const AccessoriesPage = () => {
  return (
    <div className="category-page">
      <h1>Accessories</h1>
      <img src="/jewel.png" alt="Accessories Banner" style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }} />
      <ProductList category="Accessories" />
    </div>
  );
};

export default AccessoriesPage;
