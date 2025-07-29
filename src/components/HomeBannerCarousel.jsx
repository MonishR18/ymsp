import React, { useState, useEffect } from 'react';
import './HomeBannerCarousel.css';

const slides = [
  {
    id: 1,
    title: 'Beds',
    price: 'From ₹8,999',
    description: 'Wooden Street, Sleepyhead & more',
    imageUrl: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJlZHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    title: 'Galaxy F36 5G',
    price: 'From ₹15,999*',
    description: 'Sale starts on 29th July',
    imageUrl: 'https://rukminim2.flixcart.com/fk-p-ads/824/366/dp-doc/1752904008124-cmd9tsczg291p0q8nhxpd9331-9bc6e1c89eff1dcdafe7902a2c3466b1247228cd2da2f517a2115bf74ac8c4ee.jpg?q=100',
  },
  {
    id: 3,
    title: 'Dining Tables',
    price: 'From ₹9,999',
    description: 'Ikea, Pepperfry & more',
    imageUrl: 'https://media.istockphoto.com/id/1329937916/photo/scandinavian-domestic-dining-room-interior.jpg?s=612x612&w=0&k=20&c=jblput4MEg7QLUCIffJguBXIg1qYHXrpowBoLuiUasM=',
  },
];

const backgrounds = [
  'linear-gradient(90deg, #70a0f2ff 0%, #d9e2ec 100%)',
  'linear-gradient(90deg, #171617ff 0%, #474444ff 100%)',
  'linear-gradient(90deg, #7a576aff 0%, #f0f0f0 100%)',
];

const HomeBannerCarousel = () => {
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
    <div className="carousel-container">
      <div className="carousel-slide" style={{ backgroundImage: backgrounds[current] }}>
        <div className="carousel-content">
          {current === 1 ? (
            <img src={slides[current].imageUrl} alt={slides[current].title} className="carousel-image-full" />
          ) : (
            <>
              <div className="carousel-image-wrapper">
                <img src={slides[current].imageUrl} alt={slides[current].title} className="carousel-image" />
              </div>
              <div className="carousel-text">
                <p className="carousel-category">{slides[current].title}</p>
                <p className="carousel-price">{slides[current].price}</p>
                <p className="carousel-description">{slides[current].description}</p>
              </div>
            </>
          )}
          {current !== 1 && (
            <div className="carousel-text">
              <p className="carousel-category">{slides[current].title}</p>
              <p className="carousel-price">{slides[current].price}</p>
              <p className="carousel-description">{slides[current].description}</p>
            </div>
          )}
        </div>
        <button className="carousel-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
        <button className="carousel-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
        <div className="carousel-indicators">
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
    </div>
  );
};

export default HomeBannerCarousel;
