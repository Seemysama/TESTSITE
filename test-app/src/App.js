import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  function connectToBackend() {
    axios.get('http://127.0.0.1:5000')  // Remplacez par l'URL de votre back-end
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={connectToBackend}>Connecter au back-end</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;