import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/store" activeClassName="active">Store</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
    );
};

export default Navbar;
