import React, { useState } from "react";
import AnimatedProductCard from "./AnimatedProductCard"; // Assuming you have a data file for products
import ProductCard from "./ProductCard";
import "./ProductList.css"; // reuse existing styles

const newLaunchProducts = [
  {
    id: 301,
    name: "Gaming Mouse",
    brand: "BrandA",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    price: 1299,
    altText: "Gaming Mouse",
  },
  {
    id: 302,
    name: "Mechanical Keyboard",
    brand: "BrandB",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyAXizOctdrgWXWTOnP5Ma9Z1VIFmY-wyeQ&s",
    price: 3499,
    altText: "Mechanical Keyboard",
  },
  {
    id: 303,
    name: "Portable Charger",
    brand: "BrandA",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    price: 1499,
    altText: "Portable Charger",
  },
  {
    id: 304,
    name: "LED Monitor",
    brand: "BrandC",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    price: 8999,
    altText: "LED Monitor",
  },
  {
    id: 305,
    name: "Smartwatch",
    brand: "BrandB",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    price: 5999,
    altText: "Smartwatch",
  },
  {
    id: 306,
    name: "Wireless Earbuds",
    brand: "BrandA",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKAfjEtsStQ5NcHAGoBm_z_fJd9fMamlyyQ&s",
    price: 3999,
    altText: "Wireless Earbuds",
  },
  {
    id: 307,
    name: "Fitness Tracker",
    brand: "BrandC",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    price: 2499,
    altText: "Fitness Tracker",
  },
  {
    id: 308,
    name: "Bluetooth Speaker",
    brand: "BrandB",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gmSKZI12NVoxicadxDDNoAjRHSDLTfcPA&s",
    price: 1999,
    altText: "Bluetooth Speaker",
  },
];

const NewLaunchProductGrid = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const brands = ["All", ...new Set(newLaunchProducts.map((p) => p.brand))];

  const filteredProducts = newLaunchProducts.filter(
    (product) =>
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      product.price <= maxPrice
  );

  return (
    <div className="product-list">
      <h2>New Launch Products</h2>
      <div>
        <label>
          Brand:
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: "20px" }}>
          Max Price:
          <input
            type="number"
            value={maxPrice === Infinity ? "" : maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value === "" ? Infinity : Number(e.target.value))
            }
            placeholder="No limit"
          />
        </label>
      </div>
      <div className="product-grid" style={{ marginTop: "10px" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewLaunchProductGrid;
