import React from "react";

const ProductCard = ({ product, onView, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />

      {/* Product Title */}
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>

      {/* Price */}
      <p className="text-indigo-600 font-bold text-md mb-2">₹{product.price}</p>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => onView(product)}
          className="text-sm text-gray-700 hover:text-indigo-600"
        >
          View
        </button>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-indigo-600 text-white px-3 py-1 text-sm rounded hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;