import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center">
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4">
          Welcome to ShopVerse 🛍
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover amazing products at unbeatable prices. Browse through our collection and add your favorites to the cart.
        </p>
        <Link
          to="/products"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;