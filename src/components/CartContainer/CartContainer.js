import './estilo.css';
import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () =>{
    const {listaProdCarrito, removeItem, vaciarCarrito} = useContext(CartContext);
    // console.log("value", value)

    return (
        <div className="estilo-carrito">
            <h2>Productos en el carrito</h2>
            <div>
                {listaProdCarrito.map(item=>(
                    <div className="lista-carrito">
                        <p>{item.name} - {item.cantidad}</p>
                        <button onClick={()=>removeItem(item.id)}> Eliminar producto </button>
                    </div>
                ))}
            </div>
            <button onClick={vaciarCarrito} className='vaciar'> Vaciar carrito </button>
        </div>
    )
}
