import React from 'react';
import './AnimatedProductCard.css';

const AnimatedProductCard = ({ imageSrc, productName, altText }) => {
  const isVideo = imageSrc.endsWith('.webm') || imageSrc.endsWith('.mp4');

  return (
    <div className="animated-product-card">
      {isVideo ? (
        <video
          src={imageSrc}
          autoPlay
          loop
          muted
          className="animated-product-image"
          alt={altText}
        />
      ) : (
        <img src={imageSrc} alt={altText} className="animated-product-image" />
      )}
      <p className="product-name">{productName}</p>
    </div>
  );
};

export default AnimatedProductCard;
