import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import {EquipoCreate} from "../equipos/EquipoCreate"
import {EquipoList} from "../equipos/EquipoList"
import { EquipoEdit } from '../equipos/EquipoEdit'


export function Tablero(){
    return <div className="row">
        <div className="col-3">
            Menu
            <ul>
                <li>Categorias</li>
                <li><Link to = "/tablero/equipoCreate">Equipos Crear</Link></li>
                <li><Link to = "/tablero/equipoList">Equipos Listar</Link></li>
            </ul>
        </div>
        <div className="col-9">
            <Routes>
            <Route path="/equipoCreate" element={<EquipoCreate/>}></Route>
            <Route path="/equipoList" element={<EquipoList/>}></Route>
            <Route path="/equipoEdit/:id" element={<EquipoEdit />}></Route>

            </Routes>

        </div>
    </div>
}