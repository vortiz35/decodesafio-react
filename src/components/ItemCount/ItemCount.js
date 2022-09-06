import './estilo.css';
import {useState } from "react";

const ItemCount = ({stock, inicial}) => {
    const [contador,setContador] = useState(inicial);

    const agregar = () => {
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
    </div>
  );
};

export default ItemCount;
