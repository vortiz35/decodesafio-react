import './estilo.css';
import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import {NavLink} from 'react-router-dom'

export const CartContainer = () =>{
    const {listaProdCarrito, removeItem, vaciarCarrito, precioTotal} = useContext(CartContext);
    // console.log("value", value)


    return (
        <div className="estilo-carrito">            
            {
                listaProdCarrito.length === 0 ?
                <>
                    <h3>¡Aún no hay productos en el carrito!</h3>
                    <NavLink className="boton-Comprar" to='/'>
                         <button>🏃‍♀️🏃‍♀️🏃‍♀️ IR A COMPRAR... </button>
                    </NavLink>
                </>
                :
                <>
                    <h2>Productos en el carrito</h2>
                    <div>
                    {listaProdCarrito.map(item=>(
                        <div key={item.id} className="lista-carrito">
                            <p>{item.name} ${item.precio} c/u  -  {item.cantidad} unidades </p>
                            <button onClick={()=>removeItem(item.id)}> Eliminar producto </button>
                        </div>
                    ))}
                    </div>
                     <p> TOTAL : $ {precioTotal()} </p> 
                    <button onClick={vaciarCarrito} className='vaciar'> Vaciar carrito </button>
                </>
            }
        </div>
    )
}
