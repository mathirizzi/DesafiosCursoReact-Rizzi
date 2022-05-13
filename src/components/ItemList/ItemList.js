import React from 'react'
import Item from '../Item/Item'

const ItemList = ({listaProductos}) => {
    return (
        <>
        <div className='item-list'>
            {listaProductos.map((producto) => <Item producto={producto} key={producto.id}/>)}
        </div>
        </>
    )
}

export default ItemList