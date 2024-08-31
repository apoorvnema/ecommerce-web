import React from 'react';
import ProductList from './components/ProductList';
import CartIcon from './components/CartIcon';
import { CartProvider } from './context/CartContext';

function App() {
  const products = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <CartProvider>
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products} />
      <CartIcon />
    </div>
    </CartProvider>
  );
}

export default App;
