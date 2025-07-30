import React from 'react';

const GenzStoreProductGrid = ({ products }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
          />
          <h4 style={{ margin: '10px 0 5px' }}>{product.name}</h4>
          <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>₹{product.price}</p>
          <button
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => alert(`Added ${product.name} to cart`)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default GenzStoreProductGrid;
