import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export function EventoList() {
    const [eventos, setEventos] = useState([])

    function cargar() {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch('http://localhost:3001/api/eventos', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEventos(data)
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
                    <th>Equipo 1</th>
                    <th>Marcador</th>
                    <th>Equipo 2</th>
                    <th>Marcador</th>
                    <th>Fecha evento</th>
                </tr>
            </thead>
            <tbody>
                {
                    eventos.map(dato => (
                        <tr>
                            <td>{dato.Equipo1}</td>
                            <td>{dato.MarcadorE1}</td>
                            <td>{dato.Equipo2}</td>
                            <td>{dato.MarcadorE2}</td>
                            <td>{dato.FechaEvento}</td>
                            <td><Link to={`/tablero/eventoEdit/${dato.id}`}>Editar</Link></td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
        <div className="col-9">

        </div>
    </>
}