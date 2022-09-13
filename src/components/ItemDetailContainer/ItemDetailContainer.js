//import './estilo.css';
import data from '../ItemListContainer/mock-data';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({}) => {
  const {prodId} = useParams();
  const [items,setItems] = useState([]); 

  const getData = new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve(data);
    }, 2000);
  });

  useEffect(() =>{
    getData.then((result)=>{
      setItems(result);
      // console.log(result);
    });
  },[]);

  return (
    <>
      <ItemDetail listaItem={items} />
    </>
 
  )
}

export default ItemDetailContainer