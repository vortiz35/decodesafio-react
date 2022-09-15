//import './estilo.css';
import ItemCount from '../ItemCount/ItemCount';
import {useState } from "react";


const ItemDetail = ({item}) => {
    const [count,setCount] = useState(0);
    
    const onAdd = (dato)=>{
        //console.log(dato, "usó el contador")
        setCount(dato)
    }

    return (
        <>
            <p> Detalle del producto </p>
            <div>
            <img src={item.imagen} alt={item.name}></img>
            </div>
            <div>
                <h4>{item.name}</h4>
                <p>{item.precio}</p>
                <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>
                <p>Seleccionaste: {count}</p>
            </div>
        </>
    );
};

export default ItemDetail