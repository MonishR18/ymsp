import React from 'react';
import FullWidthZoomOutImages from '../components/FullWidthZoomOutImages';
import ProductList from '../components/ProductList';
import './WomenPage.css';



const EthnicWearPage = () => {
  return (
    <div className="women-page-container">
      <FullWidthZoomOutImages />
      <h1 className="women-page-title">Ethnic Wear Products</h1>
      <div className="product-list-container">
        <ProductList category="ethnic-wear" />
      </div>
      <div
        className="animated-products-grid"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '24px',
          justifyContent: 'center'
        }}
      >
       
    
      </div>
    </div>
  );
};

export default EthnicWearPage;
