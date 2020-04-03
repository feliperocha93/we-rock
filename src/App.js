import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import Header from './components/Header';
import Footer from './components/Footer';

import './styles.css'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
