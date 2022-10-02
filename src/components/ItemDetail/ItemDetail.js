//import './estilo.css';
import ItemCount from '../ItemCount/ItemCount';
import {useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom'


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
                 <img src={item.imageID} alt={item.name}></img>
            </div>
            <div>
                <h4>{item.name}</h4>
                <p> $ {item.precio}</p>
                {
                count == 0 ?
                    <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>  
                    :
                    <div>
                    <p>Agregaste: {count} productos </p>
                    <Link className="boton-Comprar" to='/cart'>
                            <button> Ir al carrito </button>
                    </Link>                   
                    </div>
                }
            </div>    
                
        </>
    );
};

export default ItemDetail