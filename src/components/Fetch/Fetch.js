import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import ItemListFetch from '../ItemListFetch/ItemListFetch'

const Fetch = () => {
    const [listaProductosFetch, setListaProductosFetch]=useState([])

    useEffect(() => {
    axios.get('https://6286db78e9494df61b2e4fbf.mockapi.io/products')
      .then((res) => setListaProductosFetch(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
        <h2>Esta es la pagina del Fetch</h2>
        <ItemListFetch listaProductosFetch={listaProductosFetch}/>

    </div>
  )
}

export default Fetch