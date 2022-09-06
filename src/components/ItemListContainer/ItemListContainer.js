import './estilo.css';
import ItemCount from '../ItemCount/ItemCount';
import data from './mock-data';
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({saludo}) => {
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
  },[items]);

  return (
    <>
      <div className='itemContenedor'>
        <h1>{saludo}</h1>
        <ItemCount stock={10} inicial={0}/>
      </div>
      <ItemList laLista={items} />
    </>
 
  )
}

export default ItemListContainer