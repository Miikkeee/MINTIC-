import React,{useRef} from "react"
import { useParams } from "react-router-dom"

export function EquipoEdit(){
    const refDeporte = useRef(null)
    const refNequipo= useRef(null)

    const {id} = useParams();

    const handleSubmit = () =>{

    }

    return <>
    <h3>Equipo Edit</h3>
    <form role="form" onSubmit={handleSubmit}>
        <p>Deporte</p>
    <input type="text" id="Deporte" name="name" size="10" ref={refDeporte}/>
    <p>Nequipo</p>
    <input type="text" id="Nequipo" name="name" size="10" ref={refNequipo}/>
   <button type="submit" class="btn btn-primary">Guardar</button>
   </form>
</>
}