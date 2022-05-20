import React from 'react'
import AddButton from "../AddButton/AddButton";
const ItemFetch = ({productoFetch}) => {


return (
    
<div className="item">
    <img src={productoFetch.img} alt={productoFetch.name}/>
    <p>{productoFetch.name}</p>
    <p>{productoFetch.description}</p>
    <p>{productoFetch.price}</p>
<AddButton stock={productoFetch.stock}/>
</div>
)
}

export default ItemFetch