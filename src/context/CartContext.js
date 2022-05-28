import React from "react";

const CartContext = React.createContext();
const {Provider} = CartContext 

const CartProvider = ({children}) => {
  const [cart, setCart] = React.useState([])
  console.log(cart)
  const addToCart = (productDetail) => {
    if(cart.find(prod => prod.id === productDetail.id)) {
    const newCart= cart.map(prod =>{
    if(prod.id === productDetail.id) {
      prod.quantity++
    }
    return prod
    }
    )
    setCart(newCart)
  }
    else {
    setCart([ ...cart, {...productDetail, quantity: 1}])

  }
  };

  const removeFromCart = (productDetail) => {
    if(productDetail.id === 1){
      const newCart = cart.filter((prod) => prod.id !== productDetail.id);
      setCart(newCart)
    }else{
      const newCart = cart.map((prod) => {
        if (prod.id === productDetail.id) {
          prod.quantity--;
        }
        return prod;
      });
      setCart(newCart)
    }
   
  };

  const deleteAll = () => {
    setCart([])
  };

  const isInCart = (id) => {
    return cart.find(productDetail => productDetail.id === id)
  };

  return (
    <Provider
      value={{
        addToCart,
        removeFromCart,
        deleteAll,
        isInCart,
        cart,
      }}>{children}</Provider>
  )
}

export { CartContext, CartProvider };
