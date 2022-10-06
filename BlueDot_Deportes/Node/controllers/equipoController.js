const { response } = require('express')
const equipoModel = require('../models/equipScheme')

const equipoListar = async (request,response) => {  //Enlista los equipos CONECTADO

    try{
        const equipos = await equipoModel.find()
        response.status(200).send(equipos)
        return equipos
    }catch(error){
        console.log(error)
    }

}

const equipoGuardar = async (request, response) => { //Guardar un equipo CONECTADO
    try {
        const equipo = request.body
        if (equipo.Nequipo == '' || equipo.Deporte == '') {
            response.status(400).end()
        } else {
            try {
                const equipos = await equipoModel.find()
                const modelEquipo = new equipoModel(request.body)
                const ids = equipos.map(equipo => equipo.id)
                const maxId = Math.max(...ids)
                if(maxId != -Infinity){
                    modelEquipo.id = maxId + 1
                }else{
                    console.log(maxId)
                    modelEquipo.id = 0
                }
                modelEquipo.save()
                response.send("Guardado con exito").end()
            }catch(error){
                console.log("error en el guardado de equipo" + error)
            }
            console.log("Equipo guardado")
        }

    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
}

const equipoObtener = async (request, response) => { //Obtiene un equipo CONECTADO
    try {
        const id = Number(request.params.id)
        if(id == ''){
            response.status(400).send("Error buscando el equipo").end()
        }else{
            console.log("get id " + id)
            const rta = await equipoModel.findOne({id: id})
            //console.log(rta)
            console.log("Equipo encontrado")
            response.status(200).send(rta)
        }
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }

}

const equipoActualizar = async (request, response) => { //Actualiza un equipo CONECTADO
    try {
        const { id, Deporte , Nequipo } = request.body
        const equipo = {}
        equipo.Deporte = Deporte
        equipo.Nequipo = Nequipo
        const rta = await  equipoModel.updateOne(
            {id: id},
            {$set: equipo},
            {new: true}
        )
        response.send("actualizao").end()
        console.log("actualizao")
    } catch (error) {
        console.log("error" + error)
        response.status(400).end()
    }

}

const equipoEliminar = async (request, response) => {   //Elimina un equipo CONECTADO
    try {
        const id = Number(request.params.id)
        if(id == ''){
            response.status(400).send("Error eliminando el equipo").end()
        }else{
            console.log("del id " + id)
            const rta = await equipoModel.deleteOne({id: id})
            console.log(rta)
            console.log("Equipo eliminado")
            response.status(200).send("Categoria eliminada exitosamente.")
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