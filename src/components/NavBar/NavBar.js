import './estilo.css';

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div className="logo">
                <p>IMAGEN</p>
            </div>
            <div>
                <ul>
                    <li>
                        <p>Inicio</p>
                    </li>
                    <li>
                        <p>Productos</p>
                    </li>
                    <li>
                        <p>Contacto</p>
                    </li>
                </ul>
            </div>
            <div>
                <button> Información </button>
            </div>
        </div>
    );
};

export default NavBar;