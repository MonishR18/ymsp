import React from 'react';
import ProductList from '../components/ProductList';
import './CategoryPages.css';

const MenswearPage = () => {
  return (
    <div className="category-page">
      <h1>Menswear</h1>
      <ProductList category="Menswear" />
    </div>
  );
};

export default MenswearPage;
