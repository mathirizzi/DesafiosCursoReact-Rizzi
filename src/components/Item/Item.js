import React from 'react'
import AddButton from "../AddButton/AddButton";
const Item = ({producto}) => {
    
return (
    
<div className="item">
    <img src={producto.img} alt={producto.name}/>
    <p>{producto.name}</p>
    <p>{producto.description}</p>
<AddButton stock={producto.stock}/>
</div>
)
}

export default Item