import './estilo.css';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
  return (
    <div className="item-container">
        <h3>{prod.name}</h3>
        <img src={prod.imagen} alt={prod.name} />
        <p>{prod.precio}</p>
        <p> Disponibles: {prod.stock}</p>
        <Link to={`/item/${prod.id}`}>
                <button>Ver detalle...</button>
        </Link>
   </div>
  );
};

export default Item;