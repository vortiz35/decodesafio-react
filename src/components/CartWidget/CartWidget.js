import './estilo.css';
import carrito from './carrito.png';

const CartWidget = () => {
  return (
    <div className='carro'>
         <img src={carrito} alt="CartWidget" />   
    </div>
  )
};

export default CartWidget;