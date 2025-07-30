import React from 'react';
import FullWidthZoomOutImages from '../components/FullWidthZoomOutImages';
import EthnicWearProductGrid from '../components/EthnicWearProductGrid';
import './WomenPage.css';

const EthnicWearPage = () => {
  return (
    <div className="women-page-container">
      <FullWidthZoomOutImages />
      <h1 className="women-page-title">Ethnic Wear</h1>
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
        <EthnicWearProductGrid />
      </div>
    </div>
  );
};

export default EthnicWearPage;
