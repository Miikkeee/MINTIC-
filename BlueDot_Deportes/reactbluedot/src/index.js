import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header, { Menu } from './elements/Header.js'
import { Tablero } from './dashboard/Tablero';
import { Login } from './users/login';
import { UserRegister } from './users/UserRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Router>
    <Menu />
    <Header />
    <div className='container'>
      <div className='row align-center'>
        <div className='col m-5'>

  
          <Routes>
          <Route path="/UserRegister" element={<UserRegister/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/tablero/*" element={<Tablero />}></Route>
          </Routes>
        </div>
      </div>
    </div>



  </Router>

</>
);

