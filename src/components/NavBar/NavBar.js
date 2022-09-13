import './estilo.css';
import favicon from './favicon.ico';
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div>
                <img src={favicon} alt="loguito" />
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "activo" : "inactivo"} to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "activo" : "inactivo"} to='/producto/exterior'>Exterior</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "activo" : "inactivo"} to='/producto/interior'>Interior</NavLink>
                    </li>
                </ul>
            </div>
            <div className='navBar2'>
                <CartWidget />
                <button> Ingresar </button>
            </div>
            
        </div>
    );
};

export default NavBar;