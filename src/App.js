import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Knowlegdes from './pages/Knowlegdes';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Notfound from './pages/Notfound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/competences' element={<Knowlegdes/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='*' element={<Notfound/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;