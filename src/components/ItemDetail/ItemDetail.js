import Item from '../Item/Item';

const ItemDetail = ({lista, numproducto}) => {
    
    const laLista = ({lista}) => {
        lista.map((prod)=>{
        return (
         <Item 
            key={prod.id}
            name={prod.name}
            precio={prod.precio}
            img={prod.imagen}
         />
        );
    })};

    return (
    <>
        laLista.[numproducto]
    </>
  );
};

export default ItemDetail