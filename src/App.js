import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from "./context/CartContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";

import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Fetch from './components/Fetch/Fetch'

import Cart from './pages/Cart';




function App() {
  

  
  
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/productos" element={<ItemListContainer greeting={"Nuestro producto"}/>}/>
        <Route exact path='/categoria/:tipocategoria' element={<ItemListContainer greeting={"Nuestro producto"}/>}/>
        <Route exact path="/detalle/:id" element={   <ItemDetailContainer/>}/>
        <Route exact path="/fetch" element={<Fetch/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
      </Routes>
      </CartProvider>         
    </BrowserRouter>
  );
}


export default App;
