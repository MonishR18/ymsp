import React from "react";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import HomeCategorySection from "../components/HomeCategorySection";
import HomeBannerCarousel from '../components/HomeBannerCarousel';
import FooterSection from '../components/FooterSection';
import BrandCarousel from '../components/BrandCarousel';
import ZoomOutImages from '../components/ZoomOutImages';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/newlaunch');
  };

  return (
    <div>
      <HomeBannerCarousel />
       <HomeCategorySection />
      <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
        <img
          src="/newlaunch.jpg"
          alt="New Launch"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <BrandCarousel />
       <ZoomOutImages />
      <ProductList />
      <FooterSection />
    </div>
  );
};

export default Home;
