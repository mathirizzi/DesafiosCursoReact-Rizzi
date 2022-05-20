import React, { useEffect, useState } from "react";
import { getProducts } from '../../mocks/fakeApi'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
export default function ItemListContainer () {

    const [listaProductos, setListaProductos]=useState([])
    const { tipocategoria } = useParams()

    useEffect(()=>{
        getProducts
        .then((res)=> {
            if(!tipocategoria){
                setListaProductos(res)
            }else{
                setListaProductos(res.filter((prod) => prod.category === tipocategoria))
            }
            })
                
        .catch((error)=> console.log(error))
        
        
            
    },[tipocategoria])
    
    return(
        <div className="itemlist-container">
            <h3>Lista de productos</h3>
            <ItemList listaProductos={listaProductos}/>
        </div>
        
    )
}