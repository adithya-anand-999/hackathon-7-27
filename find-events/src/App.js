import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Page from './Components/Page/Page'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
