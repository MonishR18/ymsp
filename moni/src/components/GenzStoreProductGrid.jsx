import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"; // reuse existing styles

const genzStoreProducts = [
  {
    id: 201,
    name: "Genz Smartwatch",
    brand: "BrandA",
    image: "https://example.com/images/genz_smartwatch.jpg",
    price: 5999,
  },

  {
    id: 202,
    name: "Genz Wireless Earbuds",
    brand: "BrandB",
    image: "https://example.com/images/genz_wireless_earbuds.jpg",
    price: 3999,
  },

  {
    id: 203,
    name: "Genz Fitness Tracker",
    brand: "BrandA",
    image: "https://example.com/images/genz_fitness_tracker.jpg",
    price: 2499,
  },

  {
    id: 204,
    name: "Genz Portable Charger",
    brand: "BrandC",
    image: "https://example.com/images/genz_portable_charger.jpg",
    price: 1499,
  },

  {
    id: 205,
    name: "Genz Bluetooth Speaker",
    brand: "BrandB",
    image: "https://example.com/images/genz_bluetooth_speaker.jpg",
    price: 1999,
  },

  {
    id: 206,
    name: "Genz Gaming Mouse",
    brand: "BrandA",
    image: "https://example.com/images/genz_gaming_mouse.jpg",
    price: 1299,
  },

  {
    id: 207,
    name: "Genz LED Monitor",
    brand: "BrandC",
    image: "https://example.com/images/genz_led_monitor.jpg",
    price: 8999,
  },

  {
    id: 208,
    name: "Genz Mechanical Keyboard",
    brand: "BrandB",
    image: "https://example.com/images/genz_mechanical_keyboard.jpg",
    price: 3499,
  },
];

const GenzStoreProductGrid = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const brands = ["All", ...new Set(genzStoreProducts.map((p) => p.brand))];

  const filteredProducts = genzStoreProducts.filter(
    (product) =>
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      product.price <= maxPrice
  );

  return (
    <div className="product-list">
      <h2>Genz Store Products</h2>
      <div>
        <label>
          Brand:
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: "20px" }}>
          Max Price:
          <input
            type="number"
            value={maxPrice === Infinity ? "" : maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value === "" ? Infinity : Number(e.target.value))
            }
            placeholder="No limit"
          />
        </label>
      </div>
      <div className="product-grid" style={{ marginTop: "10px" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GenzStoreProductGrid;
