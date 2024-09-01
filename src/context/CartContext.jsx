import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const userEmail = localStorage.getItem('email');
    const sanitizedEmail = userEmail?.replace('@', '').replace('.', '');
    const crudCrudBaseURL = `https://crudcrud.com/api/debd907197134b4ba0b1fe0cfdb9d284/cart${sanitizedEmail}`;

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(crudCrudBaseURL);
                if (!response.ok) {
                    throw new Error('Failed to fetch cart items.');
                }
                const data = await response.json();
                setCart(data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [crudCrudBaseURL]);

    const addToCart = async (product) => {
        const existingProduct = cart.find(item => item.title === product.title);
        if (existingProduct) {
            const updatedCart = cart.map(item =>
                item.title === product.title
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(updatedCart);
            try {
                const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
                const { _id, ...productWithoutId } = updatedProduct;

                const response = await fetch(`${crudCrudBaseURL}/${_id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(productWithoutId),
                });
                if (!response.ok) {
                    throw new Error('Failed to update product in cart.');
                }
            } catch (error) {
                console.error('Error updating product in cart:', error);
            }
        } else {
            const newProduct = { ...product, quantity: 1 };
            setCart(prevCart => [...prevCart, newProduct]);

            try {
                const response = await fetch(crudCrudBaseURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProduct),
                });
                if (!response.ok) {
                    throw new Error('Failed to add product to cart.');
                }
            } catch (error) {
                console.error('Error adding product to cart:', error);
            }
        }
    };

    const removeItemFromCart = async (index, id) => {
        const newCartElements = [...cart];
        newCartElements.splice(index, 1);
        setCart(newCartElements);

        try {
            const response = await fetch(`${crudCrudBaseURL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to remove product from cart.');
            }
        } catch (error) {
            console.error('Error removing product from cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
