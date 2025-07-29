import React, { useState } from 'react';
import './NewLaunchHeaderSection.css';
import BeautyPage from '../pages/BeautyPage';

const categories = [
  'Women',
  'Men',
  'Shoes & Bags',
  'Beauty',
  'Home & Living',
];

const categoryDetails = {
  Beauty: [
    {
      title: 'Lips',
      items: [
        'Lipstick',
        'Liquid Lipstick',
        'Lip Crayon',
        'Lip Gloss',
        'Lip Liner',
        'Lip Balm',
        'Lip Stain',
      ],
    },
    {
      title: 'Face',
      items: [
        'Face Primer',
        'Concealer',
        'Foundation',
        'Compact Powder',
        'Loose Powder',
        'Blush & Highlighter',
        'BB & CC Cream',
        'Makeup Remover',
      ],
    },
    {
      title: 'Eyes',
      items: [
        'Kajal',
        'Eyeliner',
        'Mascara',
        'Eye Shadow',
        'Eyebrow',
      ],
    },
    {
      title: 'Nails',
      items: [
        'Nail Polish',
        'Nail Polish Remover',
      ],
    },
    {
      title: 'Skin Care',
      items: [
        'Moisturizer',
        'Sunscreen',
        'Face Wash',
        'Masks',
        'Serum',
        'Eye Cream',
      ],
    },
    {
      title: 'Hand Care',
      items: [
        'Body Lotions',
        'Bath & Body',
        'Soaps',
        'Shower Gel',
        'Scrub',
        'Wipes',
      ],
    },
    {
      title: 'Haircare',
      items: [
        'Fragrances',
        'Deodorants',
        'Perfumes',
        'Sets',
      ],
    },
    {
      title: 'Tools & Accessories',
      items: [
        'Face Tool',
        'Makeup Pouches',
      ],
    },
  ],
  'Home & Living': [
    {
      title: 'Home Accessories',
      items: [
        'Lighting',
        'Home Fragrances',
        'Wall Accents',
        'Garden',
        'Furnishing',
        'Beddings',
        'Cushions',
        'Curtains',
        'Accessories',
        'Appliance Covers',
        'Floor Coverings',
      ],
    },
    {
      title: 'Kitchen',
      items: [
        'Storage And Containers',
        'Cooking',
        'Kitchenware',
        'BakeWare',
        'Outdoor',
        'KitchenLinens',
        'Serveware',
        'Tableware',
        'Serving',
        'Cutlery',
        'Table Linen',
        'Crockery',
        'Dinner Sets',
        'Table Accessories',
      ],
    },
    {
      title: 'Bath & Laundry',
      items: [
        'Laundry',
        'Bath',
        'Accessories',
      ],
    },
  ],
};

const NewLaunchHeaderSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Women');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const details = categoryDetails[selectedCategory] || [];

  return (
    <div className="newlaunch-header-section">
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="category-details">
        {details.map((section, idx) => (
          <div key={idx} className="category-section">
            {section.title && <h4>{section.title}</h4>}
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {section.extra && <p className="extra">{section.extra}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewLaunchHeaderSection;
