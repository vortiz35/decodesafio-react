// import './estilo.css';
// import ItemCount from '../ItemCount/ItemCount';
import data from './mock-data';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [itemdet,setItemdet] = useState([]); 

  const getItemdet = () => {
    fetch(data)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.results);
            setItemdet(data.results);
        });
        setTimeout(()=>{
          resolve(data);
        }, 2000);
  };

  useEffect(() =>{
    getItemdet.then((result)=>{
      setItemdet(result);
      console.log(result);
    });
  },[]);

  return (
    <>
      <ItemDetail lista={itemdet} numproducto={0}/>
    </>
 
  )
}

export default ItemDetailContainer