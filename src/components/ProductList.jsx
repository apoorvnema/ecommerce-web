import React from 'react';

const productsArr = [
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

const ProductList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {productsArr.map((product, index) => (
        <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', width: '200px' }}>
          <img src={product.imageUrl} alt={product.title} style={{ width: '100%', height: 'auto' }} />
          <div style={{ padding: '10px' }}>
            <h3 style={{ fontSize: '16px', margin: '0 0 10px' }}>{product.title}</h3>
            <p style={{ margin: '0', fontWeight: 'bold' }}>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
