import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartIcon from './components/CartIcon';
import Navbar from './components/Navbar';
import About from './components/About';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import { AuthContextProvider } from './context/AuthContext';

function App() {
    const products = [
        {
            id: 867,
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            images: [
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc28',
                'https://images.unsplash.com/photo-1551963831-b3b1ca40c98f',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29'
            ],
            reviews: [
                'Not what I expected, but still okay.',
                'Good quality, but a bit expensive.',
                'Amazing product, highly recommend!'
            ]
        },
        {
            id: 162,
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            images: [
                'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                'https://images.unsplash.com/photo-1551963831-b3b1ca40c98f',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc28'
            ],
            reviews: [
                'Amazing product, highly recommend!',
                'Good quality, but a bit expensive.'
            ]
        },
        {
            id: 337,
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            images: [
                'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc28',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29'
            ],
            reviews: [
                'Worth every penny!',
                'Amazing product, highly recommend!',
                'Good quality, but a bit expensive.'
            ]
        },
        {
            id: 537,
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            images: [
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
                'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                'https://images.unsplash.com/photo-1551963831-b3b1ca40c98f'
            ],
            reviews: [
                'Not what I expected, but still okay.',
                'Worth every penny!',
                'Fantastic colors and great durability.'
            ]
        }
    ];

    return (
        <CartProvider>
            <Router>
                <AuthContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/store" element={<ProductList products={products} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/store/:productId" element={<ProductDetail products={products} />} />
                    </Routes>
                    <CartIcon />
                </AuthContextProvider>
            </Router>
        </CartProvider>
    );
}

export default App;
