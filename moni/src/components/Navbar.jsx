import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser, FaMicrophone, FaCamera } from 'react-icons/fa';
import WareHouse from './WareHouse';
import { FaHouse, FaLocationPin, FaMap, FaMapLocation } from 'react-icons/fa6';
import Home from '../pages/Home';

const Navbar = () => {
  const navigate = useNavigate();

  const handleWarehouseClick = () => {
    // Example functionality: navigate to warehouse page
    navigate('/warehouse');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <div className="logo-creative-wrapper">
            <img src="/logo.png.jpg" alt="Logo" className="logo-image creative-logo" width={60} />
            <div className="logo-tagline">WearAura - Style for Every Story</div>
          </div>
        </Link>
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar creative-search-bar"
            placeholder="What are you looking for?"
          />
          <FaMicrophone className="search-icon" title="Voice Search" />
          <FaCamera className="search-icon" title="Image Search" />
        </div>
        <div className="navbar-links">
          <Link to="/newlaunch">New Launch</Link>
          <Link to="/genzstore">GenZ Store</Link>
        </div>
      </div>
      
      
      <div className="navbar-icons">
        <Link to="/signin" title="Sign In">
          <FaUser className="icon navbar-icon-shift" />
        </Link>
        <Link to="/wishlist" title="Wishlist">
          <FaHeart className="icon navbar-icon-shift" />
        </Link>
        <Link to="/cart" title="Cart">
          <FaShoppingCart className="icon navbar-icon-shift" />
        </Link>
        <Link to="/warehouse" title="Warehouse" className="warehouse-link">
          <FaLocationPin className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
