import React, { createContext, useState, useEffect } from 'react';

// Create the CartContext
export const CartContext = createContext();

// CartProvider component to wrap the app and provide cart state
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage when cartItems state changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (burger, selectedVarient, quantity) => {
        // Check if burger is already in the cart
        const existingItem = cartItems.find(
            (item) => item.id === burger.id && item.varient === selectedVarient
        );

        // Calculate price based on variant and quantity
        const price = burger.price[0][selectedVarient] * quantity;

        if (existingItem) {
            // If burger is already in the cart, update its quantity and price
            setCartItems(
                cartItems.map((item) =>
                    item.id === burger.id && item.varient === selectedVarient
                        ? {
                            ...item,
                            quantity: parseInt(item.quantity + quantity),
                            price: price, // Update price based on the quantity and variant
                        }
                        : item
                )
            );
        } else {
            // Add new burger to cart
            setCartItems([
                ...cartItems,
                { ...burger, varient: selectedVarient, quantity, price },
            ]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
