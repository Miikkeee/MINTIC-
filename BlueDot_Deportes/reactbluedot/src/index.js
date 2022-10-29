import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header, { Menu } from './elements/Header.js'
import { ListaEventos } from './events/ListaEventos';
import { Tablero } from './dashboard/Tablero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Router>
    <Menu />
    <Header />
    <div className='container'>
      <div className='row align-center'>
        <div className='col m-5'>
          <Routes>
            <Route path="/tablero/*" element={<Tablero />}></Route>
            <Route path="/" element={<ListaEventos/>}></Route>
          </Routes>
        </div>
      </div>
    </div>



  </Router>

</>
);

