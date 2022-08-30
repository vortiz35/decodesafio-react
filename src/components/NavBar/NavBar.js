import './estilo.css';
import favicon from './favicon.ico';
import CartWidget from '../CartWidget/CartWidget'

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
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Interior</a>
                    </li>
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