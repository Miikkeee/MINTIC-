import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'

export function EquipoList() {
    const [equipos, setEquipos] = useState([])

    function cargar() {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch('http://localhost:3001/api/equipos', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEquipos(data)
            })
            .catch(error => console.log("error" + error))
    }

    useEffect(() => {
        cargar()
    }, [])


    return <>
        <table >
            <thead>
                <tr>
                    <th>Equipo</th>
                    <th>Deporte</th>
                </tr>
            </thead>
            <tbody>
                {
                    equipos.map(dato => (
                        <tr>
                            <td>{dato.Nequipo}</td>
                            <td>{dato.Deporte}</td>
                            <td><Link to={`/tablero/equipoEdit/${dato._id}`}>Editar</Link></td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
        <div className="col-9">

        </div>
    </>
}