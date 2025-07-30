import React, { useState, useEffect } from 'react';
import './WesternDressesCarousel.css';

const slides = [
  {
    id: 1,
    imageUrl: '/west1.jpg',
    altText: 'Western Dress 1',
  },
  {
    id: 2,
    imageUrl: '/west2.jpg',
    altText: 'Western Dress 2',
  },
  {
    id: 3,
    imageUrl: '/west3.jpg',
    altText: 'Western Dress 3',
  },
];

const WesternDressesCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="western-carousel-container">
      <div className="western-carousel-slide">
        <img
          src={slides[current].imageUrl}
          alt={slides[current].altText}
          className="western-carousel-image"
        />
      </div>
      <button className="western-carousel-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
      <button className="western-carousel-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
      <div className="western-carousel-indicators">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`indicator-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WesternDressesCarousel;
