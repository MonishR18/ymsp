import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-600">
        <div>
          <h2 className="text-3xl font-semibold mb-4">🛒 Your Cart is Empty</h2>
          <Link to="/products" className="text-indigo-600 font-medium underline">
            Go to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 rounded" />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 border rounded px-2 py-1 text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <p className="text-xl font-semibold text-green-700 mb-4">
          Total: ₹{totalPrice}
        </p>
        <Link
          to="/checkout"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;