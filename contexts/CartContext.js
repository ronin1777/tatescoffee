'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState(null);

    const updateCartData = async (cartId) => {
        const response = await fetch(`/api/orders/cart/${cartId}/`);
        if (response.ok) {
            const data = await response.json();
            setCartData(data);
        }
    };

    return (
        <CartContext.Provider value={{ cartData, updateCartData }}>
            {children}
        </CartContext.Provider>
    );
};