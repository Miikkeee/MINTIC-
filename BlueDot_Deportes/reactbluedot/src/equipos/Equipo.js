export function Equipo(props){
    return <>
    <ul>
        <li>nombre: { props.nombre}</li>
        <li>Partidos jugados: {props.jugados}</li>
        <li>promedio: {props.promedio}</li>
        <li>ultimo Partido: {props.ultimo}</li>
        <li>record: {props.record[0]} / {props.record[1]}</li>
        <li>Juega internacional?: {props.internacional ? "SI":"No"}</li>
        <li>ubicado en: {props.ubicado.pais} / {props.ubicado.ciudad}</li>
    </ul>   
    </>
}

