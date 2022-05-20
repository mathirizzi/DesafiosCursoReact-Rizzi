import React from "react";
import { getProducts } from '../../mocks/fakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {
const [productDetail, setProductDetail] = React.useState([]);
const { id } = useParams()


React.useEffect(() => {
  getProducts
  .then((res) => setProductDetail(res.find((item) => item.id === id)))
  .catch((error) => console.log(error))
}, [])

  return (
    <div className="ItemDetailContainer">
    <ItemDetail productDetail={productDetail}/>
    </div>
  );
}
