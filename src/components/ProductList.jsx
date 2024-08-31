import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div className="product" key={index}>
                    <img src={product.imageUrl} alt={product.title} />
                    <div className="product-info">
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <button className="button">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
