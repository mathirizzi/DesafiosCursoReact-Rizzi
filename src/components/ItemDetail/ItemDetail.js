import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddButton from '../AddButton/AddButton'
import {CartContext} from "../../context/CartContext";
import { Card, Row } from "react-bootstrap";

const ItemDetail = ({productDetail}) => {
  const{title, description, price, id, img, stock}=productDetail
  const [count, setCount] = React.useState(1)
  const {addToCart} = React.useContext(CartContext);
    const volverProductos = useNavigate()
    const [compra, setCompra] = React.useState(false)

    const onAdd =()=>{
      const itemInCart ={
        id,
        img,
        quantity: count,
        stock,
        title,
        description,
        price
      }
      addToCart(itemInCart)
      setCompra(true)
    } 
   

  
  return (
<>
    <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>Detalle del producto</Card.Header>
        <Card.Body>
        <Card.Img src={img} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            Precio: $ {price}
          </Card.Text>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          
      <div className='d-inline-flex text-center justify-content-center'>
      <Row>
      {compra ? <button onClick={()=>volverProductos('/cart')}>Ir al carrito</button>
       : <AddButton onSubmit={onAdd} count={count} setCount={setCount} initial={1} stock={stock}/>}
      <button className='btn-info text-center' onClick={() => volverProductos('/productos')}>Volver a Productos</button>
      </Row>
      </div>
      </Card.Footer>

      </Card>
      </>
    /*<div className='justify-content-center border '>
    <img src={img} alt={title}/>
    <h2>Titulo del producto: {title}</h2>
    <p>{description}</p>
    <p>Precio: $ {price}</p>
    <div className='border d-inline-block'>
    {compra ? <button onClick={()=>volverProductos('/cart')}>Ir al carrito</button>
     : <AddButton onSubmit={onAdd} count={count} setCount={setCount} initial={1} stock={stock}/>}
    <button className='d-flex' onClick={() => volverProductos('/productos')}>Volver a Productos</button>
    </div>
    </div>
*/
   
        
  )
}

export default ItemDetail