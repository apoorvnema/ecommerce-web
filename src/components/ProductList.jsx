import React, { useContext } from 'react';
import './ProductList.css';
import { CartContext } from '../context/CartContext';

const ProductList = ({ products }) => {
    const {cart, addToCart} = useContext(CartContext);
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div className="product" key={index}>
                    <img src={product.imageUrl} alt={product.title} />
                    <div className="product-info">
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
