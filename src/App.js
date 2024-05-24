import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Page/About';
import Home from './Page/Home';
import Error from './Page/Error';
import Logement from './Page/Logement';
import Menu from "./Compenent/Menu";
import Footer from "./Compenent/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Menu /> 
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            {/* Route générique pour la page 404 */}
            <Route path='*' element={<Error />} />
          </Routes> 
          <Footer />  
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

