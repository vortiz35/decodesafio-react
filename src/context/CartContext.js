import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) =>{
    const [listaProdCarrito, setListaProdCarrito] = useState([]);
    
    const isInCart = (itemId) => {
        const existeProd = listaProdCarrito.some(item => item.id === itemId);
        return existeProd;
    }

    const addItem = (item,cantidad)=>{
        console.log("item", item, "cantidad", cantidad)
        
        const newProduct = {
            ...item,
            cantidad
        }
        console.log("newProduct", newProduct)

        
        if (isInCart(item.id)){
            const position = listaProdCarrito.findIndex(prod => prod.id === item.id);
            const newArreglo = [...listaProdCarrito];
            newArreglo[position].cantidad = newArreglo[position].cantidad + cantidad;
            setListaProdCarrito(newArreglo);
        } else{
            const newArreglo = [...listaProdCarrito];
            newArreglo.push(newProduct);
            setListaProdCarrito(newArreglo);
        } 
    }

    const removeItem = (itemId) => {
        //console.log("remover", itemId)
        const newArreglo = listaProdCarrito.filter(product => product.id !== itemId)
        //nueva lista con todos los elementos cuyo id es diferente al que quiere remover
        setListaProdCarrito(newArreglo);
    }

    const vaciarCarrito = () =>{
        console.log("VACIAR")
        setListaProdCarrito([]);
    }

    const precioTotal = () =>{
        const total = listaProdCarrito.reduce((acum, item) => acum + item.precio*item.cantidad, 0);
        console.log("SUMAR")
        return total
    }

    const totalProductos = () =>{
        const total = listaProdCarrito.reduce((acum, item) => acum + item.cantidad, 0);
        console.log("productos", total)
        return total
    }


    return(
        <CartContext.Provider value= {{listaProdCarrito, addItem, removeItem, vaciarCarrito, precioTotal, totalProductos}}>
            {children}
        </CartContext.Provider>
    )
}