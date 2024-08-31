import React, { useState } from 'react';
import Cart from './Cart';

const CartIcon = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div>
            <button onClick={toggleCart} style={{ position: 'fixed', top: 10, right: 10 }}>
                🛒
            </button>
            {isCartOpen && <Cart onClose={toggleCart} />}
        </div>
    );
};

export default CartIcon;
