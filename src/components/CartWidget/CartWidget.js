export default function CartWidget ({count}) {
    const cartContainer = {
        display: "flex",
        justifyContent: "center",
    }
    
    const cartStyle = {

        width: "15%",
    }

    const countStyle = {
        display: "flex",
        alignItems: "center",
        fontSize: "30px",
        color: "red",
    }

    return(
        <div style={cartContainer}>
            <img src="/imgs/cart.png" alt="Icono del carrito" style={cartStyle}/>
            <div style={countStyle}>
            {count}
            </div>
        </div>
    )
}