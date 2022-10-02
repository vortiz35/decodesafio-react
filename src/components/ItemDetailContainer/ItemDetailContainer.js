//import './estilo.css';
import data from '../ItemListContainer/mock-data';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from  "../../utils/firebase";
import { doc, getDoc } from 'firebase/firestore';


//acá uso async/await
const ItemDetailContainer = ({}) => {
  //parámetro q le paso a la url
  const {prodId} = useParams();
  const [item,setItem] = useState([]); 
  useEffect(()=>{
          const getProducto = async()=>{
              const queryRef = doc(db,"items",prodId);   //referencia del producto
              const respuesta = await getDoc(queryRef);   //solicitud - devuelve info en objeto
              const newProduct = {
                id: respuesta.id,
                ...respuesta.data(),
              }
              setItem(newProduct)
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


//COMO LO HACÍA SIN FIREBASE
// const getItem = (id)=>{
  //   return new Promise((resolve,reject) =>{
  //     const item = data.find(item=>item.id === parseInt(id));
  //     resolve(item)
  //   })
  // };
  // useEffect(()=>{
  //       const getProducto = async()=>{
  //           const producto = await getItem(prodId);
  //           setItem(producto);
  //       }
  //       getProducto();
  // },[prodId]);
 