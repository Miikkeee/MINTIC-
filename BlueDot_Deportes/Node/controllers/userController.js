const { request, response } = require('express')
const UserModel = require('../models/userscheme')

const userGuardar = async (request, response) => { //Guardar un evento R
    try {
        const User = request.body
    
            try {
                const modelUser = new UserModel(request.body)
                console.log(modelUser)
                modelUser.save()
                response.send("Guardado con exito").end()
            }catch(error){
                console.log("error en el guardado de usuario" + error)
            }
            console.log("Usuario guardado")
        

    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
}

module.exports = {
 
    userGuardar
}