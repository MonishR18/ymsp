import React from 'react';
import FullWidthZoomOutImages from '../components/FullWidthZoomOutImages';
import ProductList from '../components/ProductList';
import './WomenPage.css';

const WomenPage = () => {
  return (
    <div className="women-page-container">
      <FullWidthZoomOutImages />
      <h1 className="women-page-title">Women Products</h1>
      <div className="product-list-container">
        <ProductList category="women" />
      </div>
    </div>
  );
};

export default WomenPage;
