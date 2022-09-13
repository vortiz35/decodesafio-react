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
                    {/* ERROR EN LOS HREF POR SER INVÁLIDOS */}
                    <li>
                        <NavLink className={({isActive})=> isActive ? "activo" : "inactivo"} to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "activo" : "inactivo"} to='/item'>Productos</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/producto/:prodId'>Productos</NavLink>
                    </li> */}
                    <li>
                        <a href="#">Exterior</a>
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