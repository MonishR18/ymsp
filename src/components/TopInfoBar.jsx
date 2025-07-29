import React from 'react';
import './TopInfoBar.css';

const TopInfoBar = () => {
  return (
    <div className="top-info-bar">
      <div className="info-left">
        <span>🚚 Free Shipping</span>
        <span>🔄 Return To Store</span>
        <span>🎁 Online Gift Card</span>
      </div>
      <div className="info-right">
        <span>📍 Delivering To</span>
        <span>📲 Download Our App</span>
        <span>📍 Store Locator</span>
        <span>❓ Help</span>
      </div>
    </div>
  );
};

export default TopInfoBar;