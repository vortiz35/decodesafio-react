// import Item from '../Item/Item';

const ItemDetail = ({listaItem}) => {
     return (
        <>
        {listaItem.map((prod)=>{
            return (
            <>
                <p> Detalle del producto </p>
                <div>
                    <img src={prod.imagen} alt={listaItem.name}></img>
                </div>
                <div>
                    <h4>{prod.name}</h4>
                    <p>{prod.precio}</p>
                </div>
            </>
            );
        })}
    </>
  );
};

export default ItemDetail