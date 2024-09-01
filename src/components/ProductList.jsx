import React, { useContext } from 'react';
import './ProductList.css';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products }) => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/store/${productId}`);
    };

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div className="product" key={index}>
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        onClick={() => handleProductClick(product.id)}
                        style={{ cursor: 'pointer' }}
                    />
                    <div className="product-info">
                        <h3 onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
                            {product.title}
                        </h3>
                        <p>${product.price}</p>
                        <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
