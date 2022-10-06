const equipoModel = require('../models/equipScheme')

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

const equipoGuardar = async (request, response) => { //Guardar un equipo
    try {
        const equipo = request.body
        const ids = equipoListar().map(equipo => equipo.id)
        const maxId = Math.max(...ids)
        if (equipo.Nequipo == '' || equipo.Deporte == '') {
            response.status(400).end()
        } else {
            try {
                const modelEquipo = new equipoModel(request.body)
                modelEquipo.save()
            }catch(error){
                console.log("error en el guardado de equipo" + error)
            }
            const newEquipo = {
                id: maxId + 1,
                Deporte: equipo.Deporte,
                Nequipo: equipo.Nequipo
            }
            equipoListar().push(newEquipo)
            response.status(200).json(newEquipo).end()
            console.log("guardado")
        }

    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
}

const equipoObtener = async (request, response) => { //Obtiene un equipo
    try {
        const id = Number(request.params.id)
        const equipo = equipoListar().find(equipo => equipo.id == id)
        if (equipo) {
            response.json(equipo)
            console.log("Equipo obtenido")
        } else {
            response.status(404).end()
        }
    } catch (error) {
        console.log("error" + error)
        response.status(400).end()
    }

}

const equipoActualizar = async (request, response) => { //Actualiza un equipo
    try {
        const id = Number(request.params.id)
        const equipoPut = request.body
        const equipo = equipoListar().find(equipo => equipo.id == id)
        if (equipo) {
            const newEquipo = {
                id: equipo.id,
                Deporte: equipoPut.Deporte,
                Nequipo: equipoPut.Nequipo
            }
            response.json(newEquipo)
            console.log("Equipo actualizado")
        } else {
            response.status(404).end()
        }
    } catch (error) {
        console.log("error" + error)
        response.status(400).end()
    }

}

const equipoEliminar = async (request, response) => {
    try {
        const id = Number(request.params.id)
        const equipo = equipoListar().filter(equipo => equipo.id != id)
        if (equipo) {
            response.json(equipo)
            response.status(204).end()
            console.log("Equipo eliminado")
        } else {
            response.status(404).end()
        }
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
}

module.exports = {
    equipoListar,
    equipoGuardar,
    equipoObtener,
    equipoActualizar,
    equipoEliminar
}