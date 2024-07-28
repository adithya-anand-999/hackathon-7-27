import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Page from './Components/Page/Page'
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero'
import Sidebar from './Components/Sidebar/Sidebar';
import Base from './Components/Main/Base';

function App() {
  const baseRef = useRef(null);

  const scrollToBase = () => {
    if (baseRef.current) {
      baseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToBase={scrollToBase} />
      <Hero />
      <Page />
      <Base ref={baseRef} />
      <Footer />
    </div>

  );
}

export default App;
//Need to add AI: Sidebar, Base after clicking the 'Use AI' button
