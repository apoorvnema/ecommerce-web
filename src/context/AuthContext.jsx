import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const calculateRemainingTime = (expirationTime) => {
        const currentTime = new Date().getTime();
        const adjustedExpirationTime = new Date(expirationTime).getTime();
        const remainingDuration = adjustedExpirationTime - currentTime;
        return remainingDuration;
    };

    const initialRemainingTime = storedExpirationDate
        ? calculateRemainingTime(storedExpirationDate)
        : 0;

    const [token, setToken] = useState(initialRemainingTime > 0 ? storedToken : null);
    const navigate = useNavigate();
    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('email');
        navigate('/login');
    }, []);

    useEffect(() => {
        if (initialRemainingTime <= 60000) {
            logoutHandler();
        } else {
            const logoutTimer = setTimeout(logoutHandler, initialRemainingTime);
            return () => clearTimeout(logoutTimer);
        }
    }, [logoutHandler, initialRemainingTime]);

    const loginHandler = (token, expirationTime, email) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        localStorage.setItem('email', email);

        const remainingDuration = calculateRemainingTime(expirationTime);
        setTimeout(logoutHandler, remainingDuration);
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
