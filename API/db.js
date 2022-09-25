const equipo =()=>{
    equipos = [
        {
            "id" : 1,
            "Deporte": "Futbol",
            "Nequipo" : "Chelsea"

        },
        {
            "id" : 2,
            "Deporte": "Futbol",
            "Nequipo" : "Liverpool"

        },
        {
            "id" : 3,
            "Deporte": "Futbol",
            "Nequipo" : "Manchester United"

        },
        
        {
            "id" : 4,
            "Deporte": "Basquetball",
            "Nequipo" : "Lakers"

        }


    ]
      
    

return equipos

}

module.exports = {
    equipoListar
}



const usuario = ()=>{
    usuarios =  [
        {
            "User" : "Mike",
            "Password" : "1234"

        },

        {
            "User" : "Serch",
            "Password" : "1234"
        }
    ]  

return usuario

    
}

const eventos = ()=>{
    evento = [
        {
            "id" : 1,
            "ideequipo1" : 1,
            "ideequipo2" : 2,
            "Fechaevento" : "1/5/2022",
            "Equipo1" : "Chelsea",
            "Equipo2" : "Liverpool",
            "MarcadorE1" : 2,
            "MarcadorE2" : 3
        },

        {
            "id" : 2,
            "ideequipo1" : 3,
            "ideequipo2" : 2,
            "Fechaevento" : "3/7/2022",
            "Equipo1" : "Manchester United",
            "Equipo2" : "Liverpool",
            "MarcadorE1" : 3,
            "MarcadorE2" : 3
        }
    ]

}