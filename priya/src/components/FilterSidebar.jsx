import React from 'react';

const FilterSidebar = ({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  color,
  setColor,
  size,
  setSize,
  brand,
  setBrand,
}) => {
  const categories = ['all', 'pants', 'casual', 'tops', 'shoes', 'accessories'];
  const colors = ['all', 'blue', 'white', 'black', 'red', 'brown', 'beige', 'gray'];
  const sizes = ['all', 'S', 'M', 'L', '41', '42', 'One Size'];
  const brands = ['all', 'BrandA', 'BrandB', 'BrandC', 'BrandD', 'BrandE'];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  return (
    <div style={{ padding: '20px', borderRight: '1px solid #ccc', minWidth: '220px' }}>
      <h3>Filter Products</h3>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="category-select" style={{ display: 'block', marginBottom: '8px' }}>
          Category
        </label>
        <select
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
          style={{ width: '100%', padding: '8px' }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="color-select" style={{ display: 'block', marginBottom: '8px' }}>
          Color
        </label>
        <select
          id="color-select"
          value={color}
          onChange={handleColorChange}
          style={{ width: '100%', padding: '8px' }}
        >
          {colors.map((col) => (
            <option key={col} value={col}>
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="size-select" style={{ display: 'block', marginBottom: '8px' }}>
          Size
        </label>
        <select
          id="size-select"
          value={size}
          onChange={handleSizeChange}
          style={{ width: '100%', padding: '8px' }}
        >
          {sizes.map((sz) => (
            <option key={sz} value={sz}>
              {sz.charAt(0).toUpperCase() + sz.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="brand-select" style={{ display: 'block', marginBottom: '8px' }}>
          Brand
        </label>
        <select
          id="brand-select"
          value={brand}
          onChange={handleBrandChange}
          style={{ width: '100%', padding: '8px' }}
        >
          {brands.map((br) => (
            <option key={br} value={br}>
              {br.charAt(0).toUpperCase() + br.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="price-range" style={{ display: 'block', marginBottom: '8px' }}>
          Max Price: ₹{maxPrice}
        </label>
        <input
          type="range"
          id="price-range"
          min="1000"
          max="10000"
          step="100"
          value={maxPrice}
          onChange={handlePriceChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
