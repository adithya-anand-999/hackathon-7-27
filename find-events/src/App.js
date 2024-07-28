import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Page from './Components/Page/Page'
import EventFinderHeading from './Components/Page/EventFinderHeading'
import SearchBar from './Components/Page/SearchBar'
import EventTypes from './Components/Page/EventTypes'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <EventFinderHeading/>
      <SearchBar/>
      <EventTypes/>
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
