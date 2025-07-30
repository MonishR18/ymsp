import React from 'react';
import NewLaunchHeaderSection from '../components/NewLaunchHeaderSection';
import NewLaunchProductGrid from '../components/NewLaunchProductGrid';
import AnimatedProductCard from '../components/AnimatedProductCard';
import '../pages/CategoryPages.css';

const animatedProducts = [
  {
    imageSrc: 'https://www.shutterstock.com/shutterstock/videos/3748415691/preview/stock-footage-air-conditioner-cooling-the-air-static-camera-d-animation.webm',
    productName: 'Air Conditioner',
    altText: 'Air Cooler Animation',
  },
  {
    imageSrc: 'https://www.shutterstock.com/shutterstock/videos/1111955363/preview/stock-footage-denpasar-indonesia-october-new-macbook-pro-with-m-chip-on-counter-of-apple-store.webm',
    productName: 'Mac Book Pro',
    altText: 'Air Conditioner Animation',
  },
  {
    imageSrc: 'https://www.shutterstock.com/shutterstock/videos/3422217985/preview/stock-footage--samut-prakan-thailand-jan-samsung-launch-the-new-samsung-galaxy-s-ultra-new-models.webm',
    productName: 'Samsung Galaxy S25 Ultra',
    altText: 'Samsung Galaxy S25 Ultra Animation',
  },
  {
    imageSrc: 'https://www.shutterstock.com/shutterstock/videos/3424748539/preview/stock-footage-animated-rotation-of-washing-machine-refrigerator-oven-and-dishwasher-sales-of-technology.webm',
    productName: 'Wahing Machine',
    altText: '',
  },
  {
    imageSrc: 'https://www.shutterstock.com/shutterstock/videos/3461618471/preview/stock-footage-tvs-in-modern-electronics-store-minsk-belarus-march.webm',
    productName: 'Television',
    altText: 'Television Animation',
  },
  {
    imageSrc: 'https://www.shutterstock.com/shutterstock/videos/30474769/preview/stock-footage-basel-march-brand-new-watch-exhibited-at-chanel-booth-at-the-watches-and-jewelry-show.webm',
    productName: 'watch',
    altText: 'Another Product Animation',
  },
];

const NewLaunchPage = () => {
  return (
    <div className="category-page">
      <NewLaunchHeaderSection />
      <div
        className="animated-products-grid"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '50px',
          justifyContent: 'center',
        }}
      >
        {animatedProducts.map(({ imageSrc, productName, altText }, index) => (
          <AnimatedProductCard
            key={index}
            imageSrc={imageSrc}
            productName={productName}
            altText={altText}
          />
        ))}
      </div>
      <NewLaunchProductGrid />
    </div>
  );
};

export default NewLaunchPage;
