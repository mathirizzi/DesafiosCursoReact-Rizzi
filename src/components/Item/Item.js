import React from 'react'
import { useNavigate } from "react-router-dom";
const Item = ({producto}) => {

const navegar = useNavigate();    

return (
    
<div className="item">
    <img src={producto.img} alt={producto.name}/>
    <p>{producto.name}</p>
    <p>Categoria: {producto.category}</p>
<button onClick={()=>navegar(`/detalle/${producto.id}`)}>Ver mas</button>
</div>
)
}

export default Item