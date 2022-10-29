import React,{useRef} from "react"
export function EquipoCreate(){
    const refDeporte = useRef(null)
    const refNequipo= useRef(null)
    const handleSubmit=(ev)=>{
        ev.preventDefault()
        console.log("Enviando datos")
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "Deporte" : refDeporte.current.value,
                    "Nequipo" : refNequipo.current.value})
        }
        fetch('http://localhost:3001/api/equipos', requestOptions)
        .then(response => response.json)
        .then(data=> console.log(data))
        .catch(error => console.log("error" + error))
    }

    return <>
        <h3>Equipo Create</h3>
        <form role="form" onSubmit={handleSubmit}>
            <p>Deporte</p>
        <input type="text" id="Deporte" name="name" size="10" ref={refDeporte}/>
        <p>Nequipo</p>
        <input type="text" id="Nequipo" name="name" size="10" ref={refNequipo}/>
       <button type="submit" class="btn btn-primary">Guardar</button>
       </form>
    </>
}