import Item from '../Item/Item';

const ItemList = ({laLista}) => {
  return (
    <>
        {laLista.map((prod)=>{
            return (
              <Item key={prod.id} item={prod}/>
            );
        })}
    </>
  );
};

export default ItemList