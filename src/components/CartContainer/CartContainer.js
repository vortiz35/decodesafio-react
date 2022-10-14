import './estilo.css';
import React, {useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import {NavLink} from 'react-router-dom'
import {db} from  "../../utils/firebase";
import {collection, addDoc} from "firebase/firestore";


export const CartContainer = () =>{
    const {listaProdCarrito, removeItem, vaciarCarrito, precioTotal} = useContext(CartContext);
    
    const [idOrder, setIdOrtder] = useState("");
    
    const sendOrder = (event) =>{
        event.preventDefault();
        const order = {
            buyer:{
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value
            },
            items:listaProdCarrito,
            date: new Date(),
            total: precioTotal()
        }
        console.log("PEDIDO", order)

        const queryRef = collection(db,"order");
        addDoc(queryRef, order).then(respuesta=>{
            console.log("HOLA", respuesta);
            setIdOrtder(respuesta.id)           
        });
        
        vaciarCarrito();
    }
    

    return (
        <div className="estilo-carrito">
            {idOrder ?
             <>
                <h1> ¡Gracias por su compra!</h1>
                <p> Su pedido fue enviado bajo el ID :  {idOrder}</p>
             </>
             :
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
                    
                    <div className='formulario'>
                        <h3>Complete sus datos para finalizar la compra: </h3>
                        <form onSubmit={sendOrder}>
                            <label>Nombre</label>
                            <input type="text"/>
                            <label>Teléfono</label>
                            <input />
                            <label>Mail</label>
                            <input type="email"/>
                            <button type='submit'> FINALIZAR PEDIDO </button>
                        </form>
                    </div>
                </>
            }
            
            </div>
            }
        </div>
        
    )
}
