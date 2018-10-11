import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Presentations from './components/Presentations/Presentations';
import Misc from './components/Misc';
import Footer from './components/Footer';

const app = () => (
  <div className="App">
    <Header />
    <About />
    <Resume />
    <Presentations />
    <Misc />
    <Footer />
  </div>
);

export default app;
