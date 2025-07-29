import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"; // Optional: for styling

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYZlnhUiONohLZ_JeLW6oRWAWXPO5HKB87Q&s",
    price: 2999,
    category: "newlaunch",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "https://www.techadvisor.com/wp-content/uploads/2025/06/Best-budget-smartwatch.png",
    price: 4999,
    category: "newlaunch",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "https://media.istockphoto.com/id/1911043669/photo/one-portable-bluetooth-speaker-on-pink-background-audio-equipment.jpg?s=612x612&w=0&k=20&c=QEUmPmraBVV0UR-PjW2k6CwJUB73kS3_NXNfZTLufVE=",
    price: 1999,
    category: "newlaunch",
  },
  {
    id: 18,
    name: "Floral Summer Dress",
    image: "https://example.com/images/floral_summer_dress.jpg",
    price: 3499,
    category: "western dress",
  },
  {
    id: 19,
    name: "Cocktail Dress",
    image: "https://example.com/images/cocktail_dress.jpg",
    price: 5999,
    category: "western dress",
  },
  {
    id: 20,
    name: "Denim Jacket",
    image: "https://example.com/images/denim_jacket.jpg",
    price: 3999,
    category: "western dress",
  },
  {
    id: 21,
    name: "Boho Maxi Dress",
    image: "https://example.com/images/boho_maxi_dress.jpg",
    price: 4599,
    category: "western dress",
  },
  {
    id: 22,
    name: "Leather Belt",
    image: "https://example.com/images/leather_belt.jpg",
    price: 1499,
    category: "western dress",
  },
  {
    id: 23,
    name: "Ruffled Blouse",
    image: "https://example.com/images/ruffled_blouse.jpg",
    price: 2799,
    category: "western dress",
  },
  {
    id: 7,
    name: "Smartphone XYZ",
    image: "https://example.com/images/smartphone_xyz.jpg",
    price: 19999,
    category: "electronics",
  },
  {
    id: 8,
    name: "Laptop ABC",
    image: "https://example.com/images/laptop_abc.jpg",
    price: 49999,
    category: "electronics",
  },
  {
    id: 9,
    name: "Wireless Earbuds",
    image: "https://example.com/images/wireless_earbuds.jpg",
    price: 2999,
    category: "electronics",
  },
  {
    id: 4,
    name: "Women's Casual Dress",
    image: "data:image/jpeg;base64,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",
    price: 1999,
    category: "women",
  },
  {
    id: 5,
    name: "Women's Handbag",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucNRVgDAIYepiy9cMHbu6fohUy9E9vbsAew&s",
    price: 2999,
    category: "women",
  },
  {
    id: 6,
    name: " Sneakers",
    image: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_454,c_limit/254601aa-ec95-44e2-9fe0-78ef237e377f/what-are-the-best-nike-basketball-shoes.jpg",
    price: 3999,
    category: "men",
  },
  {
    id: 24,
    name: "Men's Casual Shirt",
    image: "https://example.com/images/mens_casual_shirt.jpg",
    price: 2599,
    category: "Menswear",
  },
  {
    id: 25,
    name: "Men's Formal Trousers",
    image: "https://example.com/images/mens_formal_trousers.jpg",
    price: 3499,
    category: "Menswear",
  },
  {
    id: 26,
    name: "Men's Leather Shoes",
    image: "https://example.com/images/mens_leather_shoes.jpg",
    price: 4999,
    category: "Menswear",
  },
  {
    id: 27,
    name: "Running Sneakers",
    image: "https://example.com/images/running_sneakers.jpg",
    price: 3999,
    category: "Footwear",
  },
  {
    id: 28,
    name: "Leather Boots",
    image: "https://example.com/images/leather_boots.jpg",
    price: 5999,
    category: "Footwear",
  },
  {
    id: 29,
    name: "Flip Flops",
    image: "https://example.com/images/flip_flops.jpg",
    price: 999,
    category: "Footwear",
  },
  {
    id: 30,
    name: "Decorative Vase",
    image: "https://example.com/images/decorative_vase.jpg",
    price: 1999,
    category: "Home Decor",
  },
  {
    id: 31,
    name: "Wall Art",
    image: "https://example.com/images/wall_art.jpg",
    price: 2999,
    category: "Home Decor",
  },
  {
    id: 32,
    name: "Table Lamp",
    image: "https://example.com/images/table_lamp.jpg",
    price: 2499,
    category: "Home Decor",
  },
  {
    id: 33,
    name: "Face Cream",
    image: "https://example.com/images/face_cream.jpg",
    price: 1499,
    category: "Beauty",
  },
  {
    id: 34,
    name: "Lipstick",
    image: "https://example.com/images/lipstick.jpg",
    price: 999,
    category: "Beauty",
  },
  {
    id: 35,
    name: "Perfume",
    image: "https://example.com/images/perfume.jpg",
    price: 3999,
    category: "Beauty",
  },
  {
    id: 36,
    name: "Sunglasses",
    image: "https://example.com/images/sunglasses.jpg",
    price: 1999,
    category: "Accessories",
  },
  {
    id: 37,
    name: "Leather Wallet",
    image: "https://example.com/images/leather_wallet.jpg",
    price: 2499,
    category: "Accessories",
  },
  {
    id: 38,
    name: "Silk Scarf",
    image: "https://example.com/images/silk_scarf.jpg",
    price: 1499,
    category: "Accessories",
  },
];

const ProductList = ({ category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="product-list">
      <h2>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "Featured Products"}</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
