import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          ShopVerse
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-indigo-600 transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-indigo-600 transition">
            Cart
          </Link>
          <Link to="/checkout" className="hover:text-indigo-600 transition">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;