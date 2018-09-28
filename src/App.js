import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Presentations from './components/Presentations';
import Misc from './components/Misc';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Presentations />
        <Misc />
        <Footer />
      </div>
    );
  }
}

export default App;
