import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate payment success
    alert("✅ Payment successful!");
    clearCart();
    navigate("/"); // Redirect to home or success page
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        <p>Your cart is empty. Please add items before checkout.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          ></textarea>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number (Fake)"
            required
            maxLength="16"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
          >
            Pay ₹{totalPrice}
          </button>
        </form>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <p className="text-lg font-bold text-green-700">
            Total: ₹{totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
