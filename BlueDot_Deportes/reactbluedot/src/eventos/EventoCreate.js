import React, { useRef } from "react"
import swal from 'sweetalert'
export function EventoCreate() {
    const refFechaEvento = useRef(null)
    const refEquipo1= useRef(null)
    const refEquipo2 = useRef(null)
    const refMarcador1= useRef(null)
    const refMarcador2 = useRef(null)
    const handleSubmit = (ev) => {
        ev.preventDefault()
        //Validacion
        if(refFechaEvento.current.value ==""){
            swal({
                title: "Error al ingresar datos",
                text: "Ingresa datos correctos",
                icon: 'warning'
            })
        }else if (refEquipo1.current.value ==""){
            swal({
                title: "Error al ingresar datos",
                text: "Ingresa datos correctos",
                icon: 'warning'
            })
        }else if (refEquipo2.current.value ==""){
            swal({
                title: "Error al ingresar datos",
                text: "Ingresa datos correctos",
                icon: 'warning'
            })
        }else if (refMarcador1.current.value ==""){
            swal({
                title: "Error al ingresar datos",
                text: "Ingresa datos correctos",
                icon: 'warning'
            })
        }else if (refMarcador2.current.value ==""){
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
                "id": 0,
                "FechaEvento": refFechaEvento.current.value,
                "Equipo1": refEquipo1.current.value,
                "Equipo2": refEquipo2.current.value,
                "MarcadorE1": refMarcador1.current.value,
                "MarcadorE2": refMarcador2.current.value
            })
        }
        fetch('http://localhost:3001/api/eventos', requestOptions)
            .then(response => response.json)
            .then(data => {
                console.log(data)
                swal({
                    title: 'Evento',
                    text: "Evento Guardado",
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
    <h3>Evento Create</h3>
    <form role="form" onSubmit={handleSubmit}>
        <p>Fecha Evento</p>
    <input type="text" id="Deporte" name="name" ref={refFechaEvento}/>
    <p>Equipo1</p>
    <input type="text" id="Nequipo" name="name"  ref={refEquipo1}/>
    <p>Equipo2</p>
    <input type="text" id="Nequipo" name="name"  ref={refEquipo2}/>
    <p>Marcador1</p>
    <input type="text" id="Nequipo" name="name"  ref={refMarcador1}/>
    <p>Marcador2</p>
    <input type="text" id="Nequipo" name="name"  ref={refMarcador2}/>
   <button type="submit" class="btn btn-primary">Crear</button>
   </form>
    </>
}