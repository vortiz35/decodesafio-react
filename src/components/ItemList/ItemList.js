import Item from '../Item/Item';

const ItemList = ({laLista}) => {
  return (
    <>
        {laLista.map((prod)=>{
            return (
              <Item key={prod.id} 
              name={prod.name} 
              imagen={prod.imageID} 
              precio={prod.precio} 
              stock={prod.stock}
              id={prod.id}/>
            );
        })}
    </>
  );
};

export default ItemList