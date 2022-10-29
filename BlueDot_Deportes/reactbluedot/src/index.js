import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Header, { Menu } from './elementos/Header.js'
import { Evento } from './events/Evento';
import { Equipo } from './Equipo';
import { ListaEventos } from './events/ListaEventos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<Router>
<Menu />
<Routes>
  <Route path="/tablero" element={<ListaEventos/>}></Route>
</Routes>
</Router>

  <Header />
  </>
);

