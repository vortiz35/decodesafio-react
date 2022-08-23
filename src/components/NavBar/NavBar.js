import './estilo.css';

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div className="logo">
                <p>DecoDesign</p>
            </div>
            <div>
                <ul>
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
            <div>
                <button> Contacto </button>
            </div>
        </div>
    );
};

export default NavBar;