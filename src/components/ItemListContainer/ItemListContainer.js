import './estilo.css';
import data from './mock-data';
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from  "../../utils/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';

//acá uso promesas
const ItemListContainer = ({saludo}) => {
  const {categoriaId} = useParams();
  // console.log('categoriaId',categoriaId)
  const [items,setItems] = useState([]); 

    useEffect(() =>{
      //Referencia a la colección - diferente si hay o no filtro
      const queryRef = !categoriaId ? collection(db, "items") : query(collection(db, "items"),where("categoria","==", categoriaId))
      getDocs(queryRef).then(respuesta=>{
          //a json - unimos id con data - única lista con todos los prod
          const listaProductos = respuesta.docs.map(item=>{
            const newProduct = {
              id: item.id,
              ...item.data()            
            }
            return newProduct
          });
          setItems(listaProductos);
          })
      },[categoriaId])
  
  return (
    <>
      <div className='itemContenedor'>
        <h1>{saludo}</h1>
      </div>
      <ItemList laLista={items} />
    </>
 
  )
}

export default ItemListContainer


//COMO LO HACÍA SIN FIREBASE
// const getData = new Promise((resolve,reject) =>{
  //   setTimeout(()=>{
  //     resolve(data);
  //   }, 2000);
  // });

  // useEffect(() =>{
  //   getData.then(result=>{
  //     if(categoriaId){
  //       const newProducts = result.filter(item=>item.categoria === categoriaId);
  //       setItems(newProducts)
  //     } else{
  //       setItems(result)
  //     };
  //   })
  // },[categoriaId])
