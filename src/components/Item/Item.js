import './estilo.css';

const Item = ({name, precio, stock}) => {
  return (
    <div className="item-container">
        <h3>{name}</h3>
        <p>{precio}</p>
        <p>Disponibles: {stock}</p>
    </div>
  );
};

export default Item;