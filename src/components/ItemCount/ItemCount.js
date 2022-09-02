import './estilo.css';
import { useState } from "react";

const ItemCount = ({stock, inicial}) => {
    const [contador,setContador] = useState(inicial);

    const suma = () => {
        setContador(contador + 1)
    }
    const agregar = () => {
        if (contador < stock){
            suma();
        }
    }
    
    const resta = () => {
        setContador(contador - 1)
    }
    const quitar = () => {
        if (contador > inicial){
            resta();
        }
    }

  return (
    <div className="contenedor">
        <p> Agregar al carrito </p> 
        <h2>{contador}</h2>
        <div>
            <button className='b1' onClick={agregar}> - </button> 
            <button className='b2' onClick={quitar}> + </button> 
        </div>
    </div>
  );
};

export default ItemCount;
