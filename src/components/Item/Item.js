import React from 'react'
import { useNavigate } from "react-router-dom";
const Item = ({producto}) => {

const navegar = useNavigate();    

return (
    
<div className="item">
    <img src={producto.img} alt={producto.title}/>
    <p>{producto.title}</p>
    <p>{producto.description}</p>
    <p>Categoria: {producto.category}</p>
    <p>Precio: $ {producto.price}</p>
<button onClick={()=>navegar(`/detalle/${producto.id}`)}>Ver mas</button>
</div>
)
}

export default Item