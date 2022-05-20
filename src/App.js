import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Fetch from './components/Fetch/Fetch'



function App() {

  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer greeting={"Nuestro producto"}/>}/>
        <Route path='/categoria/:tipocategoria' element={<ItemListContainer greeting={"Nuestro producto"}/>}/>
        <Route path="/detalle/:id" element={   <ItemDetailContainer/>}/>
        <Route path="/fetch" element={<Fetch/>}/>
      </Routes>         
    </BrowserRouter>
  );
}


export default App;
