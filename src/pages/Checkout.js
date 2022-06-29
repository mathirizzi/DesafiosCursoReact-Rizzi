import React from "react";

import { addDoc, collection, getFirestore } from "firebase/firestore";

import { CartContext } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [data, setData] = React.useState();

  const [orderId, setOrderId] = React.useState(false);

  const { cart, deleteAll } = React.useContext(CartContext);

  const navegar = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const order = {
      buyer: data,

      items: cart,
    };

    const db = getFirestore();

    const orderCollection = collection(db, "orders");

    await addDoc(orderCollection, order).then(({ id }) => {
      setOrderId(id);

      deleteAll();
    });
  };

  return (
    <div className="">
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <h1>Ingresa tus datos personales.</h1>

          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            required
            type="phone"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />

          <input type="submit" value="Finalizar compra" />
        </form>
      ) : (
        <>
          <p>Muchas gracias por tu compra!</p>

          <p>Tu orden es: {orderId}</p>

          <button onClick={() => navegar("/productos")}>
            Volver a comprar
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
