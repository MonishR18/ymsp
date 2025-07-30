import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import GenzStoreProductGrid from '../components/GenzStoreProductGrid';
import products from '../data/products';

const GenzStorePage = () => {
  const [category, setCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(10000);
  const [color, setColor] = useState('all');
  const [size, setSize] = useState('all');
  const [brand, setBrand] = useState('all');

  // Filter products based on category, max price, color, size, and brand
  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === 'all' || product.category === category;
    const priceMatch = product.price <= maxPrice;
    const colorMatch = color === 'all' || product.color === color;
    const sizeMatch = size === 'all' || product.size === size;
    const brandMatch = brand === 'all' || product.brand === brand;

    // Show product only if it matches all selected filters (one option from each category)
    return categoryMatch && priceMatch && colorMatch && sizeMatch && brandMatch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <img
        src={process.env.PUBLIC_URL + '/genz.jpg'}
        alt="GenZ Store Banner"
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />
      <img
        src={process.env.PUBLIC_URL + '/gen1.jpg'}
        alt="GenZ Store Banner 2"
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />

      <div style={{ display: 'flex', gap: '20px' }}>
        <FilterSidebar
          category={category}
          setCategory={setCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          color={color}
          setColor={setColor}
          size={size}
          setSize={setSize}
          brand={brand}
          setBrand={setBrand}
        />
        <div style={{ flex: 1 }}>
          <GenzStoreProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default GenzStorePage;
