import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Books from './components/Books';
import Category from './components/Category';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
