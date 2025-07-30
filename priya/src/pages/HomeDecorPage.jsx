import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const HomeDecorPage = () => {
  return (
    <div className="category-page">
      <h1>Home Decor</h1>
      <img src="/homeee.jpg" alt="homedecor Banner" style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }} />
      <ProductList category="Home Decor" />
    </div>
  );
};

export default HomeDecorPage;
