import React from "react"

const CartContext = React.createContext();
const {Provider} = CartContext


const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])

    const addToCart = () => {

    }

    const removeFromCart = () => {

    }

    const deleteAll = () => {

    }

    const isInCart = () => {

    }

    
    return(
        <Provider value={{
            addToCart,
            removeFromCart,
            deleteAll,
            isInCart,
            cart,
        }}>{children}</Provider>
    )
}

export {CartContext, CartProvider}