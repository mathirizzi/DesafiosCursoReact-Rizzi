import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddButton from '../AddButton/AddButton'
import {CartContext} from "../../context/CartContext";

const ItemDetail = ({productDetail}) => {
  const {addToCart, deleteAll, removeFromCart} = React.useContext(CartContext);
    const volverProductos = useNavigate()
    
  return (
    <div className='justify-content-center border '>
        <h2>Detalle del producto: {productDetail.name}</h2>
        <img src={productDetail.img} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <div className='border d-inline-block'>
        <AddButton onSubmit={() => addToCart(productDetail)} initial={1} stock={productDetail.stock}/>
        <button onClick={() => removeFromCart(productDetail)}>Restar producto del carrito</button>
        <button onClick={() => deleteAll(productDetail)}>Borrar todo el carrito</button>
        <button className='d-flex' onClick={() => volverProductos('/productos')}>Volver a Productos</button>
        </div>
        </div>
  )
}

export default ItemDetail