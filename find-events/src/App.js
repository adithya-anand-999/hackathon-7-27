import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Page from './Components/Page/Page'
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Page/>
      <Footer/>
    </div>
  );
}

export default App;
