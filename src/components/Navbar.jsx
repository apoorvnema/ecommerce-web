import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/store" activeclassname="active">Store</NavLink>
            <NavLink to="/about" activeclassname="active">About</NavLink>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
        </nav>
    );
};

export default Navbar;
