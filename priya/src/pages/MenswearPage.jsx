import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const MenswearPage = () => {
  return (
    <div className="category-page">
      <h1>Menswear</h1>
      <img src="/men.png" alt="Menswear Banner" style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }} />
      <ProductList category="Menswear" />
    </div>
  );
};

export default MenswearPage;
