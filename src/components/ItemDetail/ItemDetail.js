//import './estilo.css';
import ItemCount from '../ItemCount/ItemCount';
import {useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({item}) => {
    //uso desestructuración del objeto value, accediendo directamente a sus propiedades
    const {addItem} = useContext(CartContext);
    const [count,setCount] = useState(0);
    
    //Acá "dato" es el número de prod a agregar al carrito
    const onAdd = (dato)=>{
        console.log(dato, "usó el contador")
        setCount(dato);
        addItem(item, dato)
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