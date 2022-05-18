import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {

  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Nuestro producto"}/>
      <ItemDetailContainer/>
    </div>
  );
}


export default App;
