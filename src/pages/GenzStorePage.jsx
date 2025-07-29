import React from 'react';
import GenzStoreProductGrid from '../components/GenzStoreProductGrid';

const GenzStorePage = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/genz.jpg'} alt="GenZ Store Banner" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
      <img src={process.env.PUBLIC_URL + '/gen1.jpg'} alt="GenZ Store Banner 2" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
      <GenzStoreProductGrid />
    </div>
  );
};

export default GenzStorePage;
