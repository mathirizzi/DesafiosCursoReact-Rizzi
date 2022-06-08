import React from "react";
import { CartContext } from "../../context/CartContext";
import { Card } from 'react-bootstrap';
import AddButton from '../AddButton/AddButton'


export default function CartItem ({cartItem}) {
  const {cart, addToCart, deleteAll, removeFromCart}  = React.useContext(CartContext);


    return(
      <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cartItem.img} />
  <Card.Body>
    <Card.Title>{cartItem.name}</Card.Title>
    <Card.Text>{cartItem.description}
    </Card.Text>
    <Card.Text>Cantidad: {cartItem.quantity}
    </Card.Text>
        <div className="d-flex">
        <button className="btn-primary m-1" onClick={() => addToCart(cartItem)} initial={1} stock={cartItem.stock}>Sumar al carrito</button>
        <button className="btn-warning m-1" onClick={() => removeFromCart(cartItem)}>Restar producto del carrito</button>
        <button className="btn-danger m-1" onClick={() => deleteAll(cartItem)}>Borrar todo el carrito</button>
        </div>
        <button className="btn-success" onClick={() => alert("Realizaste tu compra correctamente!")}>Confirmar compra</button>
  </Card.Body>
</Card>
        
      </div>
    )
  }