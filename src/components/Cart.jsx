import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const {cart, addToCart, removeItemFromCart} = useContext(CartContext);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '300px',
            height: '100%',
            backgroundColor: '#fff',
            boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.5)',
            padding: '20px',
            overflowY: 'auto',
            transition: 'transform 0.3s ease',
            transform: 'translateX(0)',
        }}>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="cart-item" style={{ display: 'flex', marginBottom: '10px' }}>
                        <img src={item.imageUrl} alt={item.title} style={{ width: '100px', marginRight: '10px' }} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeItemFromCart(index)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
