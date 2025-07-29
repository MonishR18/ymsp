import React from "react";
import AnimatedProductCard from "./AnimatedProductCard"; // Assuming you have a data file for products
import ProductCard from "./ProductCard";
import "./ProductList.css"; // reuse existing styles



const animatedProducts = [
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    productName: "Gaming Mouse",
    altText: "Gaming Mouse",
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyAXizOctdrgWXWTOnP5Ma9Z1VIFmY-wyeQ&s",
    productName: "Mechanical Keyboard",
    altText: "Mechanical Keyboard",
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    productName: "Portable Charger",
    altText: "Portable Charger",
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    productName: "LED Monitor",
    altText: "LED Monitor",
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    productName: "Smartwatch",
    altText: "Smartwatch",
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKAfjEtsStQ5NcHAGoBm_z_fJd9fMamlyyQ&s",
    productName: "Wireless Earbuds",
    altText: "Wireless Earbuds",
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    productName: "Fitness Tracker",
    altText: "Fitness Tracker",
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    productName: "Bluetooth Speaker",
    altText: "Bluetooth Speaker",
  },
];

const NewLaunchProductGrid = () => {
  const animatedProducts = [
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
      productName: "Gaming Mouse",
      altText: "Gaming Mouse",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyAXizOctdrgWXWTOnP5Ma9Z1VIFmY-wyeQ&s",
      productName: "Mechanical Keyboard",
      altText: "Mechanical Keyboard",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
      productName: "Portable Charger",
      altText: "Portable Charger",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
      productName: "LED Monitor",
      altText: "LED Monitor",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
      productName: "Smartwatch",
      altText: "Smartwatch",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKAfjEtsStQ5NcHAGoBm_z_fJd9fMamlyyQ&s",
      productName: "Wireless Earbuds",
      altText: "Wireless Earbuds",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
      productName: "Fitness Tracker",
      altText: "Fitness Tracker",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
      productName: "Bluetooth Speaker",
      altText: "Bluetooth Speaker",
    },
  ];

  return (
    <div className="product-list">
      <h2>New Launch Animated Products</h2>
      <div
        className="animated-products-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        {animatedProducts.map(({ imageSrc, productName, altText }, index) => (
          <AnimatedProductCard
            key={index}
            imageSrc={imageSrc}
            productName={productName}
            altText={altText}
          />
        ))}
      </div>
    </div>
  );
};

export default NewLaunchProductGrid;
