import './estilo.css';
//import ItemCount from '../ItemCount/ItemCount';
import data from './mock-data';
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({saludo}) => {
  const {categoriaId} = useParams();
  // console.log('categoriaId',categoriaId)
  const [items,setItems] = useState([]); 

  const getData = new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve(data);
    }, 2000);
  });

  useEffect(() =>{
    getData.then(result=>{
      if(categoriaId){
        const newProducts = result.filter(item=>item.categoria === categoriaId);
        setItems(newProducts)
      } else{
        setItems(result)
      };
    })
  },[categoriaId])

  return (
    <>
      <div className='itemContenedor'>
        <h1>{saludo}</h1>
        {/* <ItemCount stock={10} inicial={0}/> */}
      </div>
      <ItemList laLista={items} />
    </>
 
  )
}

export default ItemListContainer