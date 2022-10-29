import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import {EquipoCreate} from "../equipos/EquipoCreate"

export function Tablero(){
    return <div className="row">
        <div className="col-3">
            Menu
            <ul>
                <li>Categorias</li>
                <li><Link to = "/tablero/equipoCreate">Equipos</Link></li>
            </ul>
        </div>
        <div className="col-9">
            <Routes>
            <Route path="/equipoCreate" element={<EquipoCreate/>}></Route>
            </Routes>

        </div>
    </div>
}