import React from "react";
import { CartContext } from "../context/CartContext";
import CartItem from '../components/CartItem/CartItem'


export default function Cart () {
  const {cart}  = React.useContext(CartContext);
  const cartVacio = () => {alert("El carrito se encuentra vacio!")}
  const cartConfirm = (cart.length === 0) ? cartVacio() : cart.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id}/>) ;

    return(
      <>
      <div className="d-flex">
        <h1>Este es tu carrito</h1>
        {cartConfirm}
        
        
      </div>
      </>
    )
  }