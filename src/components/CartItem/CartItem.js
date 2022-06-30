import React from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Card, Row, Col } from 'react-bootstrap';



export default function CartItem ({cartItem}) {
  const {removeFromCart}  = React.useContext(CartContext);


    return(
      <Container fluid className="d-flex containerCartItem">
        
        <Row lg={3} className=" w-100">
      
      
      <Col className="justify-content-center d-flex" lg={3} >
  <Card.Img className="cardImg" variant="top" src={cartItem.img} />
  </Col>
  
    <Col lg={6} className="border" >
    <Card.Body>
    <Card.Title>{cartItem.title}</Card.Title>
    <Card.Text>{cartItem.description}
    </Card.Text>
    <Card.Text>Cantidad: {cartItem.quantity}
    </Card.Text>
    </Card.Body>
    </Col>
    <Col lg={3}>
    <Card.Text>Precio unitario: $ {cartItem.price}
    <button className="btn-warning m-1 " onClick={() => removeFromCart(cartItem)}>
            Restar producto del carrito
            </button>
    </Card.Text>
    </Col>
        
  


</Row>
</Container>
    )
  }