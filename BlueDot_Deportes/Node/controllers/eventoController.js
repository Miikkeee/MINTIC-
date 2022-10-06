const eventoListar = () => { // Enlista los eventos R
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

const eventoGuardar = async (request, response) => { //Guardar un evento R
    try {
        const evento = request.body
        //console.log(DB.evento)
        const ids = eventoListar().map(evento => evento.id)
        const maxId = Math.max(...ids)

        const newevento = {
            id: maxId + 1,
            ide1 : evento.ide1,
            ide2 : evento.ide2,
            Fechaevento : evento.Fechaevento,
            Equipo1 : evento.Equipo1,
            Equipo2 : evento.Equipo2,
            MarcadorE1 : evento.MarcadorE1,
            MarcadorE2 : evento.MarcadorE2,

        }
        response.json(newevento)
        response.end()
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
}

const eventoObtener = async (request,response) => { //Obtiene un evento R
    try {
        const id = Number(request.params.id)
        const evento = eventoListar().find(evento => evento.id == id)
        if (evento) {
            response.json(evento).end()
        } else {
            response.status(404).end()
        }
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }

}

const eventoActualizar = async (request,response) => { //Actualiza un equipo R
    try {
        const id = Number(request.params.id)
        const eventoPut = request.body
        const evento = eventoListar().find(evento => evento.id ==id)
        const newevento = {
            id: evento.id,
            ide1 : evento.ide1,
            ide2 : evento.ide2,
            Fechaevento : eventoPut.Fechaevento,
            Equipo1 : eventoPut.Equipo1,
            Equipo2 : eventoPut.Equipo2,
            MarcadorE1 : eventoPut.MarcadorE1,
            MarcadorE2 : eventoPut.MarcadorE2,
        }
        response.json(newevento).end()

    }catch (error){

        console.log("error")
        response.status(400).end()
    }
        
}

const eventoEliminar = async (request, response) => {  //Elimina un evento
    try {
        const id = Number(request.params.id)

        const evento = eventoListar().filter(evento => evento.id != id)
        if (evento) {
            response.json(evento)
            response.status(204).end()
            console.log("evento eliminado")
        } else {
            response.status(404).end()
        }
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
}


module.exports = {
    eventoListar,
    eventoGuardar,
    eventoObtener,
    eventoActualizar,
    eventoEliminar
}