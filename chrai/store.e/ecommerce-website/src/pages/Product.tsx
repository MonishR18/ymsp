import React from 'react';

interface ProductProps {
    name: string;
    price: number;
    description: string;
}

const Product: React.FC<ProductProps> = ({ name, price, description }) => {
    return (
        <div className="product">
            <h1>{name}</h1>
            <p>Price: ${price.toFixed(2)}</p>
            <p>{description}</p>
        </div>
    );
};

export default Product;