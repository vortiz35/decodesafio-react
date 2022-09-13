//import './estilo.css';
import data from '../ItemListContainer/mock-data';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({}) => {
  const {prodId} = useParams();
  const [item,setItem] = useState([]); 

  const getItem = (id)=>{
    return new Promise((resolve,reject) =>{
      const item = data.find(item=>item.id === parseInt(id));
      resolve(item)
    })
  };
  useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(prodId);
            setItem(producto);
        }
        getProducto();
  },[prodId]);
 

  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer