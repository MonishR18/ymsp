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
  'Women': [
    {
      title: 'topwear',
      items: [
        'T-Shirts',
        'Shirts',
        'Tops',
        'Tunics',
        'Sweatshirts',
        'Sweaters',
        'Jumpsuits',
      ],
      },
    {
      title: 'bottomwear',
      items: [
        'Jeans',
        'Pants',
        'Shorts',
        'Skirts',
        'Trousers',
        'Palazzos',
        'Leggings',
      ],
    },
    {
      title: 'dresses',
      items: [
        'Casual Dresses',
        'Party Dresses',
        'Maxi Dresses',
        'Midi Dresses',
        'Mini Dresses',
      ],
    },
    {
      title: 'footwear',
      items: [
        'Flats',
        'Heels',
        'Boots',
        'Sneakers',
        'Sandals',
        'Loafers',
      ],
    },
    {
      title: 'accessories',
      items: [
        'Bags',
        'Jewellery',
        'Sunglasses',
        'Watches',
        'Hair Accessories',
        'Belts',
      ],
    },
  ],
  'Men': [
    {
      title: 'topwear',
      items: [
        'T-Shirts',
        'Shirts',
        'Tops',
        'Tunics',
        'Sweatshirts',
        'Sweaters',
        'Jumpsuits',
      ],
    },
    {
      title: 'bottomwear',
      items: [
        'Jeans',
        'Pants',
        'Shorts',
        'Trousers',
      ],
    },
    {
      title: 'footwear',
      items: [
        'Casual Shoes',
        'Formal Shoes',
        'Sneakers',
        'Sandals',
        'Loafers',
      ],
    },
    {
      title: 'accessories',
      items: [
        'Bags',
        'Wallets',
        'Sunglasses',
        'Watches',
        'Belts',
        'Hats',
      ],
    },
  ],
  'Shoes & Bags': [
    {
      title: 'shoes',
      items: [
        'Sneakers',
        'Flats',
        'Heels',
        'Boots',
        'Loafers',
        'Sandals',
      ],
    },
    {
      title: 'bags',
      items: [
        'Handbags',
        'Clutches',
        'Backpacks',
        'Tote Bags',
        'Crossbody Bags',
      ],
    },
  ],
};

const NewLaunchHeaderSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setSelectedCategory(category);
  };

  const handleMouseLeave = () => {
    setSelectedCategory(null);
  };

  const details = selectedCategory ? categoryDetails[selectedCategory] || [] : [];

  return (
    <div className="newlaunch-header-section" onMouseLeave={handleMouseLeave}>
      <div className="category-tabs">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(category)}
          >
            {category}
          </div>
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
