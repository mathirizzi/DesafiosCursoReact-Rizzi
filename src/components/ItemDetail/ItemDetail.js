import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddButton from '../AddButton/AddButton'


const ItemDetail = ({productDetail}) => {
    const {name, description, img,stock} = productDetail
    const volverProductos = useNavigate()
    const onAdd = () => {
        console.log('agregue al carrito')
    }
  return (
    <div>
        <h2>Detalle del producto: {name}</h2>
        <img src={img} alt={name}/>
        <p>{description}</p>
        <AddButton initial={1} stock={stock}  onAdd={onAdd}/>
        <button onClick={()=>volverProductos('/productos')}>Volver a Productos</button>
        </div>
  )
}

export default ItemDetail