import React from 'react'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [data, setData] = React.useState()
  console.log(data)
  const [orderId, setOrderId] = React.useState()
  console.log(orderId)
  const {cart}  = React.useContext(CartContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name] : value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: data,
      items: cart
    };
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    await addDoc(orderCollection, order).then(({id}) => {
    setOrderId(id)
    alert(id)
  })
  
  }
  return (
    <>
    <div>Este es el Home</div>
    <div className="">
      <form onSubmit={handleSubmit}>
        <h1>Ingresa tus datos personales.</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Finalizar compra"
        />
      </form>
    </div>
    </>
  )
}

export default Home