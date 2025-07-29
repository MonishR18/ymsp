import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const MenswearPage = () => {
  return (
    <div className="category-page">
      <img src="men's.jpg" alt="Menswear" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
      <h1>Menswear</h1>
      <ProductList category="Menswear" />
    </div>
  );
};

export default MenswearPage;
