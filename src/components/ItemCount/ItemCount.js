import './estilo.css';
import {useState } from "react";
// import {NavLink} from 'react-router-dom'

const ItemCount = ({stock, inicial, onAdd}) => {
    const [contador,setContador] = useState(inicial);

    const agregar = () => {
        // console.log("agregó", contador)
        if(contador < stock){
            setContador(contador + 1);
        }
    } 

    const quitar = () => {
        if (contador > inicial){
            setContador(contador - 1);
        }
    }
    
  return (
    <div className="contenedor">
        <p> Agregar al carrito </p> 
        <h2>{contador}</h2>
        <div>
            <button className='b1' onClick={quitar}> - </button> 
            <button className='b2' onClick={agregar}> + </button> 
        </div>
        <button onClick={()=>onAdd(contador)} className="agregar">Agregar al carrito</button>
        {/* <>
            <button onClick={()=>onAdd(contador)} className="agregar">Agregar al carrito</button>
            :
            <button onClick={()=>onAdd(contador)} className="agregar">Agregar al carrito</button>
            <button onClick={()=>onAdd(contador)} className="agregar">Terminar compra</button>
        </> */}
        
    </div>
  );
};

export default ItemCount;
