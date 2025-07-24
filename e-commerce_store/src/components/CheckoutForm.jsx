import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, updateQuantity } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all fields.");
      return;
    }

    // Simulate confirmation
    setSubmitted(true);

    // Clear cart or navigate
    setTimeout(() => {
      alert("🎉 Order placed successfully!");
      navigate("/");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 text-center">
        <h2 className="text-2xl font-bold text-green-700">
          Processing your payment...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">
        Checkout
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;