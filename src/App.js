import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContext, CartProvider } from './context/CartContext';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import WarehousePage from './pages/WarehousePage';
import NewLaunchPage from './pages/NewLaunchPage';
import WomenPage from './pages/WomenPage';
import KidSection from './pages/KidSection';
import Navbar from './components/Navbar';
import EthnicWearPage from './pages/EthnicWearPage';
import WesternDressesPage from './pages/WesternDressesPage';
import MenswearPage from './pages/MenswearPage';
import FootwearPage from './pages/FootwearPage';
import HomeDecorPage from './pages/HomeDecorPage';
import BeautyPage from './pages/BeautyPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ElectronicsPage from './pages/ElectronicsPage';
import Footer from './components/Footer';
import GenzStorePage from './pages/GenzStorePage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar /> {/* 👈 This will show the header on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/newlaunch" element={<NewLaunchPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/kids" element={<KidSection />} />
          <Route path="/ethnic-wear" element={<EthnicWearPage />} />
          <Route path="/western-dresses" element={<WesternDressesPage />} />
          <Route path="/menswear" element={<MenswearPage />} />
          <Route path="/footwear" element={<FootwearPage />} />
          <Route path="/home-decor" element={<HomeDecorPage />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/genzstore" element={<GenzStorePage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
