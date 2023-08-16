import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('Ese producto ya fue agregado');
        }
    }

    const removeItem = (itemID) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemID);
        setCart(cartUpdate);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemID) => {
        return cart.some(prod => prod.id === itemID);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}