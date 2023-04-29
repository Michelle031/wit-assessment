import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav';
import Learn from './components/Learn';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />7
        <Route path="/learn" element={<Learn />} />
      </Routes> 
      <Nav />
    </div>
  );
}

export default App;
