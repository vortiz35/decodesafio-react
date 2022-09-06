import Item from '../Item/Item';

const ItemList = ({laLista}) => {
  return (
    <>
        {laLista.map((prod)=>{
            return (
             <Item 
                key={prod.id}
                name={prod.name}
                precio={prod.precio}
                stock={prod.stock}
             />
            );
        })}
    </>
  );
};

export default ItemList