const equipoListar = () => {
    equipos = [
        {
            "id": 1,
            "Deporte": "Futbol",
            "Nequipo": "Chelsea"

        },
        {
            "id": 2,
            "Deporte": "Futbol",
            "Nequipo": "Liverpool"

        },
        {
            "id": 3,
            "Deporte": "Futbol",
            "Nequipo": "Manchester United"

        },

        {
            "id": 4,
            "Deporte": "Basquetball",
            "Nequipo": "Lakers"

        }


    ]



    return equipos

}



const user = () => {
    users = [
        {
            "User": "Mike",
            "Password": "123"
        },

        {
            "User": "Mike2",
            "Password": "1233214"
        }
    ]

    return users

}


const evento = () => {
    eventos = [
        {
            "id": 1,
            "ideequipo1": 1,
            "ideequipo2": 2,
            "Fechaevento": "1/5/2022",
            "Equipo1": "Chelsea",
            "Equipo2": "Liverpool",
            "MarcadorE1": 2,
            "MarcadorE2": 3
        },

        {
            "id": 2,
            "ideequipo1": 3,
            "ideequipo2": 2,
            "Fechaevento": "3/7/2022",
            "Equipo1": "Manchester United",
            "Equipo2": "Liverpool",
            "MarcadorE1": 3,
            "MarcadorE2": 3
        }
    ]

    return eventos

}

module.exports = {
    equipoListar
}
module.exports = {
    evento
}
module.exports = {
    user
}
