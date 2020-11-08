import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactUs from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;