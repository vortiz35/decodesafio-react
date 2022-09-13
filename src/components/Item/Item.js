import './estilo.css';
import { Link } from 'react-router-dom';

const Item = ({key, name, imagen, precio, stock}) => {
  return (
    <div className="item-container">
        <h3>{name}</h3>
        <img src={imagen} alt={name} />
        <p>{precio}</p>
        <p>Disponibles: {stock}</p>
        <Link to={`/item/${key}`}>
                <button>Ver detalle...</button>
          </Link>
        {/* <button> Ver detalle...</button> */}
    </div>
  );
};

export default Item;