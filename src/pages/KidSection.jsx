import React from 'react';
import FullWidthZoomOutImages from '../components/FullWidthZoomOutImages';
import ProductList from '../components/ProductList';

const KidSection = () => {
  return (
    <div>
      <FullWidthZoomOutImages />
      <h1>Kids Products</h1>
      <div style={{ cursor: 'pointer' }}>
        <img
          src="/kids.jpg"
          alt="Kids Section"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <ProductList category="kids" />
    </div>
  );
};

export default KidSection;
