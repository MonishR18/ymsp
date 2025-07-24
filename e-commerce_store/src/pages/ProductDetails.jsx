import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/products"; // ← Your local product list

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id.toString() === id);
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-contain rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2 text-indigo-700">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-6">₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;