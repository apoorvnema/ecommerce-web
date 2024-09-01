import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <nav>
            <NavLink to="/" activeclassname="active">Home</NavLink>
            {isLoggedIn && <NavLink to="/store" activeclassname="active">Store</NavLink>}
            <NavLink to="/about" activeclassname="active">About</NavLink>
            {!isLoggedIn &&<NavLink to="/login" activeclassname="active">Login</NavLink>}
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
        </nav>
    );
};

export default Navbar;
