import React from 'react';
import './App.css';
import Books from './components/Books';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Categories from './components/Categories';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
