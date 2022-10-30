import React,{useRef} from "react"
import { useParams } from "react-router-dom"
import swal from 'sweetalert'

export function EquipoEdit(){
    const refDeporte = useRef(null)
    const refNequipo= useRef(null)

    const {id} = useParams();

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
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": id,
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
                    text: "Equipo actualizado",
                    icon: 'success'
                })
            })
            .catch(error => {
                console.log("error" + error)
                swal({
                    title: "Error",
                    text: "Error al actualizar",
                    icon: 'error'
                })

            } )
    }

    return <>
    <h3>Equipo Edit</h3>
    <form role="form" onSubmit={handleSubmit}>
        <p>Deporte</p>
    <input type="text" id="Deporte" name="name" size="10" ref={refDeporte}/>
    <p>Nequipo</p>
    <input type="text" id="Nequipo" name="name" size="10" ref={refNequipo}/>
   <button type="submit" class="btn btn-primary">Actualizar</button>
   </form>
</>
}