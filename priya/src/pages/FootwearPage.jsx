import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const FootwearPage = () => {
  return (
    <div className="category-page">
      <h1>Footwear</h1>
      <img src="/shoe.png" alt="Footwear Banner" style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }} />
      <ProductList category="Footwear" />
    </div>
  );
};

export default FootwearPage;
