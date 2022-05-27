import React from "react";
import {Link} from 'react-router-dom';
import {CartContext} from "../../context/CartContext";

export default function CartWidget () {
    const {cart} = React.useContext(CartContext);
    
    const cartContainer = {
        display: "flex",
        justifyContent: "center",
    }
    
    const cartStyle = {

        width: "15%",
    }


    return(
        <div style={cartContainer}>
            <Link to="/cart">
            <img src="/imgs/cart.png" alt="Icono del carrito" style={cartStyle}/>
            <span className="badge">{cart.lenght}</span>
            </Link>
        </div>
    )
}