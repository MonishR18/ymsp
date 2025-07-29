import React, { useContext } from 'react';
import FullWidthZoomOutImages from '../components/FullWidthZoomOutImages';
import ProductList from '../components/ProductList';
import AnimatedProductCard from '../components/AnimatedProductCard';
import { CartContext } from '../context/CartContext';
import './WomenPage.css';

const ethnicWearProducts = [
  {
    id: 1,
    imageSrc: '/men.jpg',
    productName: 'Men Traditional Kurta',
    altText: 'Men Traditional Kurta',
  },
  {
    id: 2,
    imageSrc: '/ethinicjpg.jpg',
    productName: 'Women Ethnic Saree',
    altText: 'Women Ethnic Saree',
  },
  {
    id: 3,
    imageSrc: '/newlaunch.jpg',
    productName: 'Ethnic Wear Dress',
    altText: 'Ethnic Wear Dress',
  },
  {
    id: 4,
    imageSrc: '/kids.jpg',
    productName: 'Kids Ethnic Dress',
    altText: 'Kids Ethnic Dress',
  },
];

const EthnicWearPage = () => {
  const { addToCart } = useContext(CartContext);

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
        {ethnicWearProducts.map((product) => (
          <div key={product.id} style={{ position: 'relative' }}>
            <AnimatedProductCard
              imageSrc={product.imageSrc}
              productName={product.productName}
              altText={product.altText}
            />
            <button
              onClick={() => addToCart({
                id: product.id,
                name: product.productName,
                image: product.imageSrc,
                price: 0, // Price unknown, set to 0 or update accordingly
                category: 'ethnic-wear',
              })}
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '6px 12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthnicWearPage;
