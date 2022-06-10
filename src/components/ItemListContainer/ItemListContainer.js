import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"
export default function ItemListContainer () {

    const [listaProductos, setListaProductos]=useState([])
    const { category } = useParams()

    useEffect(() => {
        const db = getFirestore()
        if (category) {
            const q = query(
                collection(db, "productos"),
                where("category", "==", category)
            );
            getDocs(q).then((snapshots) => {
                if (snapshots.size === 0) {
                    console.log("Carrito vacio");
                }
                setListaProductos(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            });
        } else {
        const productsRef = collection(db, "productos");
        getDocs(productsRef).then((snapshots) => {
            if (snapshots.size === 0) {
                console.log("No hay productos");
            }
            setListaProductos(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }
}, [category])
    
    
    return(
        <div className="itemlist-container">
            <h3>Lista de productos</h3>
            <ItemList listaProductos={listaProductos}/>
        </div>
        
    )
}