import React from "react"
export default function AddButton () {
    const [count, setCount] = React.useState(1)
    const stock = 5

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

    const onSubmit = () => {
        alert (`Se agregaron ${count} unidades al carrito`)
    }

/* Botones. */

    const StockButton = ({handleOnClick, text}) => {
        return (
        <button className="stock-button" onClick={handleOnClick}>
            {text}
        </button>
        )
    }

    const AddButton = ({handleOnSubmit}) => {
        return (
            <button className="add-button" onClick={handleOnSubmit}>
                Añadir al carrito
            </button>
        )
    }

    return(
        <div className="add-button-container">
        <StockButton text="-" handleOnClick={onDecrease}/>
        <span className="add-button-count">{count}</span>
        <StockButton text="+" handleOnClick={onAdd}/>
        <AddButton handleOnSubmit={onSubmit}/>
        </div>
    )
}