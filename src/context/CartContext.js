import React from "react";

const CartContext = React.createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (productDetail) => {
    if (cart.find(prod => prod.id === productDetail.id)) {
      const newCart = cart.map(prod => {
        if (prod.id === productDetail.id) {
          return{...prod, quantity: prod.quantity + productDetail.quantity}
        }else{
          return prod
        }
      });
      setCart(newCart);
    }
     else {
      setCart([...cart, productDetail]);
    }
  };

  const removeFromCart = (productDetail) => {
    if (productDetail.quantity === 1) {
      const newCart = cart.filter((prod) => prod.id !== productDetail.id);
      setCart(newCart);
    } else {
      const newCart = cart.map((prod) => {
        if (prod.id === productDetail.id) {
          prod.quantity--;
        }
        return prod;
      });
      setCart(newCart);
    }
  };

  const deleteAll = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find(productDetail => productDetail.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => (acc += item.quantity), 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => (acc += item.quantity * item.price), 0)
  }
  console.log(cart);
  return (
    <Provider
      value={{
        addToCart,
        removeFromCart,
        deleteAll,
        isInCart,
        cart,
        cartQuantity,
        totalCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartContext, CartProvider };
