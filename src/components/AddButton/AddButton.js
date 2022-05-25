import React from "react"
export default function AddButton ({stock}) {
    const [count, setCount] = React.useState(1)

/* Funciones Agregar, Disminuir y Añadir productos. */

    const onAdd = () => {
    if(count < stock) {
        setCount(count + 1)
        }
    }

    const onDecrease = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }


    /* Variable de Estado */
  const [action, setAction] = React.useState("comprar")


/* Botones. */

    const StockButton = ({handleOnClick, text}) => {
        return (
        <button className="stock-button" onClick={handleOnClick}>
            {text}
        </button>
        )
    }

   

     const AddToCart = () => (
    <button className="btn-info" onClick={()=> setAction("carrito")}>Añadir al carrito</button>
  );


    const GoToCart = () => (
    <button className="btn-success" onClick={()=> alert("/carrito")}>Ir al carrito</button>
  );

  const Button = action === "comprar" ? AddToCart : GoToCart




    return(
        <div className="add-button-container">
        <StockButton text="-" handleOnClick={onDecrease}/>
        <span className="add-button-count">{count}</span>
        <StockButton text="+" handleOnClick={onAdd}/>
        <Button/>
        
        </div>
    )
}