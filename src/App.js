// Start of the source code

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';       // used for routing

// all the necessary componenets represent different web pages
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import Film from "./components/Film/Film";
import People from './components/People/People';
import Planet from './components/Planet/Planet';
import Species from './components/Species/Species';
import Starship from './components/Starship/Starship';
import Vehicle from './components/Vehicle/Vehicle';

function App() {
  return (
    <div className='App'>
      <Router basename='/starwars_frontend'>
      <div className='AppHeading'>
        <NavBar />                    {/* Remain at the top of every web page. Contains Star Wars logo image and Search input box*/}
      </div>
      <div className='Appcontent'>
          <Routes>
            {/* different components render according to url */}
            <Route path='/' element={<Home />} />      {/* Default web page */}
            <Route path='/film' element={<Film />} />
            <Route path='/people' element={<People />} />
            <Route path='/planet' element={<Planet />} />
            <Route path='/species' element={<Species />} />
            <Route path='/starship' element={<Starship />} />
            <Route path='/vehicle' element={<Vehicle />} />
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App; 
