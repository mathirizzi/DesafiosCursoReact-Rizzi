import React from "react";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget () {
    const cartIcon = <FontAwesomeIcon icon={faCartShopping}/>

    const {cartQuantity}  = React.useContext(CartContext);

    return(
        <div className="cartWidget d-flex justify-content-center">
            <Link to="/cart">
          <span className="cartIcon">{cartIcon}</span>
            <span className="badge">{cartQuantity() || ''}</span>
            </Link>
        </div>
    )
}