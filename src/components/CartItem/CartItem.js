import React from "react";
import { CartContext } from "../../context/CartContext";
import { Card } from 'react-bootstrap';



export default function CartItem ({cartItem}) {
  const {removeFromCart}  = React.useContext(CartContext);


    return(
      <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cartItem.img} />
  <Card.Body>
    <Card.Title>Titulo del producto: {cartItem.title}</Card.Title>
    <Card.Text>{cartItem.description}
    </Card.Text>
    <Card.Text>Cantidad: {cartItem.quantity}
    </Card.Text>
    <Card.Text>Precio unitario: {cartItem.price}
    </Card.Text>
        <div className="d-flex">
        
        <button className="btn-warning m-1" onClick={() => removeFromCart(cartItem)}>Restar producto del carrito</button>
        
        </div>
        
  </Card.Body>
</Card>
        
      </div>
    )
  }