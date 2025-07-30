import React from 'react';
import ProductList from '../components/ProductList';
import '../pages/CategoryPages.css';

const BeautyPage = () => {
  return (
    <div className="category-page">
      <h1>Beauty</h1>
      <img src="/beauty1.png" alt="Beauty Banner" style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }} />
      <ProductList category="Beauty" />
    </div>
  );
};

export default BeautyPage;
