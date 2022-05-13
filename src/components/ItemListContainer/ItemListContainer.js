import React, { useEffect, useState } from "react";

import ItemList from '../ItemList/ItemList'
export default function ItemListContainer () {
    const [listaProductos, setListaProductos]=useState([])
    const productos = [
        {id:'01', name:'producto1', description:"Esta es la descripcion del producto", img:"imgs/producto1.png", stock:10},
        {id:'02', name:'producto2', description:"Esta es la descripcion del producto", img:"imgs/producto2.jpg", stock:9},
        {id:'03', name:'producto3', description:"Esta es la descripcion del producto", img:"imgs/producto3.jpg", stock:5},
        {id:'04', name:'producto4', description:"Esta es la descripcion del producto", img:"imgs/producto4.jpg", stock:15},
        {id:'05', name:'producto5', description:"Esta es la descripcion del producto", img:"imgs/producto5.jpg", stock:3},
        {id:'06', name:'producto6', description:"Esta es la descripcion del producto", img:"imgs/producto6.jpg", stock:20}
    ]

    const traerProd = new Promise ((resolve, reject) => {
        let condition = true 
        setTimeout(()=>{
            if(condition){
                resolve(productos)
            }else{
                reject('Error')
            }
        }, 3000)
    })

    useEffect(()=>{
        traerProd
        .then((res)=> setListaProductos(res))
        .catch((error)=> console.log(error))

    }, [])

    console.log('lista de productos', listaProductos)
    
    return(
        <div className="itemlist-container">
            <h3>Lista de productos</h3>
            <ItemList listaProductos={listaProductos}/>
        </div>
        
    )
}