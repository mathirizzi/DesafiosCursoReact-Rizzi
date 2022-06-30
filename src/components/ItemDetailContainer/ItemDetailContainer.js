import React from "react";
import {getFirestore, doc, getDoc} from "firebase/firestore"
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {
const [productDetail, setProductDetail] = React.useState([]);
const { id } = useParams()


React.useEffect(() => {
  const db = getFirestore()
  const productRef = doc(db, "productos", id);
  getDoc(productRef).then((snapshot) => {
      setProductDetail({ id: snapshot.id, ...snapshot.data()});
  });
}, [id]);

  return (
    <div className="ItemDetailContainer d-flex justify-content-center mt-5">
    <ItemDetail productDetail={productDetail}/>
    </div>
  );
}
