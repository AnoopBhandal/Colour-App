import Nav from './Nav';
import { Home, About, Colours, Colour } from './pages';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Colours" element={<Colours />} />
          <Route path="/Colours/:name" element={<Colour />} />
          <Route path='*' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
