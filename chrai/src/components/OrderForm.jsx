import React, { useState } from 'react';

const OrderForm = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [customerLat, setCustomerLat] = useState('');
  const [customerLng, setCustomerLng] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Processing order...');

    try {
      const response = await fetch('/api/orders/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: parseInt(productId),
          quantity: parseInt(quantity),
          customer_lat: parseFloat(customerLat),
          customer_lng: parseFloat(customerLng),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`Order placed successfully! Shipped from: ${data.warehouse.name}`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Error placing order.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Place an Order</h3>
      <div>
        <label>Product ID:</label>
        <input type="number" value={productId} onChange={(e) => setProductId(e.target.value)} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      </div>
      <div>
        <label>Customer Latitude:</label>
        <input type="number" step="any" value={customerLat} onChange={(e) => setCustomerLat(e.target.value)} required />
      </div>
      <div>
        <label>Customer Longitude:</label>
        <input type="number" step="any" value={customerLng} onChange={(e) => setCustomerLng(e.target.value)} required />
      </div>
      <button type="submit">Place Order</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default OrderForm;
