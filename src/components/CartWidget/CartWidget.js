import './estilo.css';
import carrito from './carrito.png';
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import React, {useContext} from "react";

const CartWidget = () => {
  const {totalProductos} = useContext(CartContext);

  return (
    <>
      {
        totalProductos() === 0 ?
        <div></div>
        :
        <div className='carro'>
            <Link to="/cart">
            <img src={carrito} alt="CartWidget" />
            <span>{totalProductos()}</span>
            {/* no olvidar ejecutar la función */}
            </Link>
        </div>
      }
      </>
    
  )
};

export default CartWidget;
