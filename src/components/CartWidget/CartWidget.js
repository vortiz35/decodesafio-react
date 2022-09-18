import './estilo.css';
import carrito from './carrito.png';
import {Link} from 'react-router-dom';

const CartWidget = () => {
  return (
    <div className='carro'>
      <Link to="/cart">
         <img src={carrito} alt="CartWidget" />
      </Link>
    </div>
  )
};

export default CartWidget;
