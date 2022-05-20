import React from 'react'
import ItemFetch from '../ItemFetch/ItemFetch'

const ItemListFetch = ({listaProductosFetch}) => {
    return (
        <>
        <div className='item-list'>
            {listaProductosFetch.map((productoFetch) => <ItemFetch productoFetch={productoFetch} key={productoFetch.id}/>)}
        </div>
        </>
    )
}

export default ItemListFetch