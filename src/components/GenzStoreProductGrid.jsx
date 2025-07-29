import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"; // reuse existing styles

const genzStoreProducts = [
  {
    id: 201,
    name: "Genz Smartwatch",
    image: "https://example.com/images/genz_smartwatch.jpg",
    price: 5999,
  },

  {
    id: 202,
    name: "Genz Wireless Earbuds",
    image: "https://example.com/images/genz_wireless_earbuds.jpg",
    price: 3999,
  },

    {
        id: 203,
        name: "Genz Fitness Tracker",
        image: "https://example.com/images/genz_fitness_tracker.jpg",
        price: 2499,
    },

    {
        id: 204,
        name: "Genz Portable Charger",
        image: "https://example.com/images/genz_portable_charger.jpg",
        price: 1499,
    },

    {
        id: 205,
        name: "Genz Bluetooth Speaker",
        image: "https://example.com/images/genz_bluetooth_speaker.jpg",
        price: 1999,
  },
    {
        id: 206,
        name: "Genz Gaming Mouse",
        image: "https://example.com/images/genz_gaming_mouse.jpg",
        price: 1299,
    },

    {
        id: 207,
        name: "Genz LED Monitor",
        image: "https://example.com/images/genz_led_monitor.jpg",
        price: 8999,
    },

    {
        id: 208,
        name: "Genz Mechanical Keyboard",
        image: "https://example.com/images/genz_mechanical_keyboard.jpg",
        price: 3499,
    },
   
];

const GenzStoreProductGrid = () => {
  return (
    <div className="product-list">
      <h2>Genz Store Products</h2>
      <div className="product-grid">
        {genzStoreProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GenzStoreProductGrid;
