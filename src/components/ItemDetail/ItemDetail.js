

const ItemDetail = ({item}) => {
    return (
        <>
            <p> Detalle del producto </p>
            <div>
            <img src={item.imagen} alt={item.name}></img>
            </div>
            <div>
                <h4>{item.name}</h4>
                <p>{item.precio}</p>
            </div>
        </>
    );
};

export default ItemDetail