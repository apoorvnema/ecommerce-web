import React, { useState } from 'react';

const Cart = () => {
    const [cartElements, setCartElements] = useState([
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ]);

    const removeItemFromCart = (index) => {
        const newCartElements = [...cartElements];
        newCartElements.splice(index, 1);
        setCartElements(newCartElements);
    };

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
            {cartElements.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartElements.map((item, index) => (
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
