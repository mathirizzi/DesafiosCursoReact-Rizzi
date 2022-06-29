import React from "react"
export default function AddButton ({stock, onSubmit, count, setCount}) {

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


  


/* Botones. */

    const StockButton = ({handleOnClick, text}) => {
        return (
        <button className="stock-button" onClick={handleOnClick}>
            {text}
        </button>
        )
    }


  const Button = ({handleOnSubmit}) => {
    return <button className="btn-success m-2" onClick={() => handleOnSubmit()}>Añadir al carrito</button>;
  };



    return(
        <div className="add-button-container d-inline-block">
        <StockButton text="-" handleOnClick={onDecrease}/>
        <span className="add-button-count">{count}</span>
        <StockButton text="+" handleOnClick={onAdd}/>
        <Button handleOnSubmit={onSubmit}/>
        
        </div>
    )
}