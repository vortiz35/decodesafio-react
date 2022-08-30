import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">        
        <ItemListContainer saludo='¡Bienvenidos a Deco Desafío!' />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FUNCIONA :D
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
