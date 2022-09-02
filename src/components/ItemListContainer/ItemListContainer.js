import './estilo.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({saludo}) => {
   
  return (
    <div className='itemContenedor'>
        <h1>{saludo}</h1>
        <ItemCount stock={10} inicial={0} />
    </div>
  )
}

export default ItemListContainer