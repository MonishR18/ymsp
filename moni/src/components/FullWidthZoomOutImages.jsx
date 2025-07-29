import React from 'react';
import './FullWidthZoomOutImages.css';

const images = [
  { id: 1, src: 'zoom1.jpg', alt: 'Image 1' },
  { id: 2, src: 'zoom2.jpg', alt: 'Image 2' },
  { id: 3, src: 'zoom3.jpg', alt: 'Image 3' },
];

const FullWidthZoomOutImages = () => {
  return (
    <div className="fullwidth-zoomout-container">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={`fullwidth-zoomout-image fullwidth-zoomout-delay-${index + 1}`}
        />
      ))}
    </div>
  );
};

export default FullWidthZoomOutImages;
