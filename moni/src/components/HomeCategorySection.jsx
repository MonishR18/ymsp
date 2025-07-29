import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCategorySection.css';

const categories = [
  { id: 1, name: 'Ethnic Wear', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s.jpg', route: '/ethnic-wear' },
  { id: 2, name: 'Western Dresses', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKAfjEtsStQ5NcHAGoBm_z_fJd9fMamlyyQ&s.jpg', route: '/western-dresses' },
  { id: 3, name: 'Menswear', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s.jpg', route: '/menswear' },
  { id: 4, name: 'Footwear', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFriWhAAgsPesRJTrlqG0TnpQ9ohmNAL4-A&s', route: '/footwear' },
  { id: 5, name: 'Home Decor', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s.jpg', route: '/home-decor' },
  { id: 6, name: 'Beauty', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s.jpg', route: '/beauty' },
  { id: 7, name: 'Accessories', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyAXizOctdrgWXWTOnP5Ma9Z1VIFmY-wyeQ&s', route: '/accessories' },
  { id: 8, name: 'electronics', imageUrl: 'https://3.imimg.com/data3/TB/KQ/MY-238885/videocon-ha.jpg', route: '/electronics' },
];

const HomeCategorySection = () => {
  return (
    <div className="home-category-section">
      {categories.map(category => (
        <Link key={category.id} to={category.route} className="category-card">
          <div className="category-image-wrapper">
            <img src={category.imageUrl} alt={category.name} className="category-image" />
          </div>
          <p className="category-name">{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default HomeCategorySection;
