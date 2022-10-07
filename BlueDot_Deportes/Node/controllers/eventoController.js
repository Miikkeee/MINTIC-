
const { request, response } = require('express')
const eventModel = require('../models/eventscheme')




const eventoListar = async (request, response) => {

    try{
        const eventos = await eventModel.find()
        response.status(200).send(eventos)

        return eventos
    }catch(error){

        console.log(error)

    }


}




const eventoGuardar = async (request, response) => { //Guardar un evento R
    try {
        const evento = request.body
    
            try {
                const eventos = await eventModel.find()
                const modelEvento = new eventModel(request.body)
                const ids = eventos.map(evento => evento.id)
                const maxId = Math.max(...ids)
                if(maxId != -Infinity){
                    modelEvento.id = maxId + 1
                }else{
                    console.log(maxId)
                    modelEvento.id = 0
                }
                modelEvento.save()
                response.send("Guardado con exito").end()
            }catch(error){
                console.log("error en el guardado de evento" + error)
            }
            console.log("Evento guardado")
        

    } catch (error) {
        console.log("error")
        response.status(400).end()
    }

}

const eventoObtener = async (request,response) => { //Obtiene un evento R
    try {
        const id = Number(request.params.id)
        if(id == ''){
            response.status(400).send("Error buscando el equipo").end()
        }else{
            console.log("get id " + id)
            const rta = await eventModel.findOne({id: id})
            //console.log(rta)
            console.log("Evento encontrado encontrado")
            response.status(200).send(rta)
        }
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }

}

const eventoActualizar = async (request,response) => { //Actualiza un equipo R
    try {
        const { id, FechaEvento , Equipo1, Equipo2, MarcadorE1, MarcadorE2 } = request.body
        const evento = {}
        evento.FechaEvento = FechaEvento
        evento.Equipo1 = Equipo1
        evento.Equipo2 = Equipo2
       evento.MarcadorE1 = MarcadorE1
        evento.MarcadorE2 = MarcadorE2
       console.log(evento)
        const rta = await  eventModel.updateOne(
            {id: id},
            {$set: evento},            
            {new: true}
        )
        response.send("actualizao").end()
        console.log("actualizao")
    } catch (error) {
        console.log("error" + error)
        response.status(400).end()
    }
}

const eventoEliminar = async (request, response) => {  //Elimina un evento
    try {
        const id = Number(request.params.id)
        if(id == ''){
            response.status(400).send("Error eliminando el evento").end()
        }else{
            console.log("del id " + id)
            const rta = await eventModel.deleteOne({id: id})
            console.log(rta)
            console.log("Equipo eliminado")
            response.status(200).send("evento eliminado exitosamente.")
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