import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully! (Dummy)');
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="checkout-content">
          <div className="shipping-form">
            <h3>Shipping Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingInfo.state}
              onChange={handleChange}
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={shippingInfo.zip}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={shippingInfo.phone}
              onChange={handleChange}
            />
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
            <p>Total: ₹{totalPrice}</p>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
