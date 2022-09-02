// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">        
        <ItemListContainer saludo='¡Bienvenidos a Deco Desafío!' />

      </header>
    </div>
  );
}

export default App;
