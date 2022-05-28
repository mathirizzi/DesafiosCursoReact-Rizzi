import React from "react";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

export default function CartWidget () {
    const {cart}  = React.useContext(CartContext);

    const cartContainer = {
        display: "flex",
        justifyContent: "center",
   
    }
    
   

    const cartIcon = {
        width: "20%",
        padding: "5px",
        justifyContent: "center"

    }

    const cartStyle = {
        maxWidth: "100%"

    }

    const spanStyle = {
        display: "flex",
        justifyContent: "center",
        color: "red",
        fontSize: "20px",
    }


    return(
        <div style={cartContainer}>
            <Link to="/cart">
                <div style={cartIcon}>
            <img src="/imgs/cart.png" alt="Icono del carrito" style={cartStyle}/>
            <span style={spanStyle} className="badge">{cart.length}</span>
            </div>
            </Link>
        </div>
    )
}