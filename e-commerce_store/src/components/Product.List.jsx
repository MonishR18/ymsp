import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  // Sample product data (you can replace this with API data later)
  const [products] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      image: "https://via.placeholder.com/300x200?text=Headphones",
      price: 1499,
    },
    {
      id: 2,
      title: "Smart Watch",
      image: "https://via.placeholder.com/300x200?text=Smart+Watch",
      price: 2599,
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      image: "https://via.placeholder.com/300x200?text=Speaker",
      price: 1199,
    },
    {
      id: 4,
      title: "Gaming Mouse",
      image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
      price: 799,
    },
    {
      id: 5,
      title: "LED Monitor",
      image: "https://via.placeholder.com/300x200?text=Monitor",
      price: 7999,
    },
    {
      id: 6,
      title: "USB Type-C Hub",
      image: "https://via.placeholder.com/300x200?text=USB+Hub",
      price: 999,
    },
  ]);

  // Dummy functions for buttons
  const handleView = (product) => {
    alert(Viewing: ${product.title});
    // You can navigate to /product/:id or open a modal here
  };

  const handleAddToCart = (product) => {
    alert(Added to Cart: ${product.title});
    // You can integrate cart context or localStorage here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Browse Products
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={handleView}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
