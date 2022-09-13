// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App App-header">
        <NavBar />
        <Routes>          
            <Route path='/producto' element={<ItemListContainer saludo='¡Bienvenidos a Deco Desafío!' />} />
            {/* <Route path="/item" element={<ItemListContainer/>} /> */}
            {/* <Route path='/producto' element={<ItemDetailContainer />}>/> */}
            <Route path='/producto/:categoriaId' element={<ItemListContainer />} />
        </Routes>
{/*  <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/contacto" element={<ContactoPage/>}/>
              <Route path="/productos" element={<ItemListContainer/>}/>
              <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
              <Route path='/item/:productId' element={<ItemDetailContainer/>}/> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
