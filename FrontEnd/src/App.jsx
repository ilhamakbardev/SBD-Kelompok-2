import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Transaction from './Pages/Transaction';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
