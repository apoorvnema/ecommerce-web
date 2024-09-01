import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
    const { productId } = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchedProduct = products.find(p => p.id === parseInt(productId));
        setProduct(fetchedProduct);
    }, [productId, products]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-detail">
            <div className="product-info">
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </div>
            <div className="product-images">
                {product.images.map((image, index) => (
                    <img key={index} src={image} alt={`${product.title} ${index + 1}`} />
                ))}
            </div>
            <div className="add-to-cart">
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            <div className="product-reviews">
                <h3>Reviews</h3>
                <ul>
                    {product.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductDetail;