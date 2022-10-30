import React, { useRef } from "react"
import swal from 'sweetalert'
export function EquipoCreate() {
    const refDeporte = useRef(null)
    const refNequipo = useRef(null)
    const handleSubmit = (ev) => {
        ev.preventDefault()
        //Validacion
        if(refDeporte.current.value ==""){
            swal({
                title: "Error al ingresar datos",
                text: "Ingresa datos correctos",
                icon: 'warning'
            })
        }else if (refNequipo.current.value ==""){
            swal({
                title: "Error al ingresar datos",
                text: "Ingresa datos correctos",
                icon: 'warning'
            })
        }


        console.log("Enviando datos")
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Deporte": refDeporte.current.value,
                "Nequipo": refNequipo.current.value
            })
        }
        fetch('http://localhost:3001/api/equipos', requestOptions)
            .then(response => response.json)
            .then(data => {
                console.log(data)
                swal({
                    title: 'Equipo',
                    text: "Equipo Guardado",
                    icon: 'success'
                })
            })
            .catch(error => {
                console.log("error" + error)
                swal({
                    title: "Error",
                    text: "Error al guardar",
                    icon: 'error'
                })

            } )
    }

    return <>
        <h3>Equipo Create</h3>
        <form role="form" onSubmit={handleSubmit}>
            <p>Deporte</p>
            <input type="text" id="Deporte" name="name" size="10" ref={refDeporte} />
            <p>Nequipo</p>
            <input type="text" id="Nequipo" name="name" size="10" ref={refNequipo} />
            <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
    </>
}