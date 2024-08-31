import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{ marginRight: '15px' }}>Store</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Navbar;
