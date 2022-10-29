import { Evento } from "./Evento";
export function ListaEventos(){
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
     
    fetch('http://localhost:3001/api/eventos', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("error " + error))
    return <div>
        <Evento/>
    </div>
}