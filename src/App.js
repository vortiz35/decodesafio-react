// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
          <div className="App App-header">
            <NavBar />
            <Routes>          
                <Route path='/' element={<ItemListContainer saludo='¡Bienvenidos a Deco Desafío!' />} />
                <Route path="/producto" element={<ItemListContainer/>} />
                <Route path='/producto/:categoriaId' element={<ItemListContainer />} />              
                <Route path='/item/:prodId' element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<CartContainer/>} />
            </Routes>
          </div>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
