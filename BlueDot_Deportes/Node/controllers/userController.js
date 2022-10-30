const { request, response } = require('express')
const UserModel = require('../models/userscheme')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { model } = require('mongoose')


const userGuardar = async (request, response) => { //Guardar un evento R
    try {
        const User = request.body
    
            try {
                const modelUser = new UserModel(request.body)
                console.log(modelUser)
                modelUser.Password = await bcryptjs.hash(modelUser.Password,10)
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

const userLogin = async (request, response) => {

    console.log("intento de login...")
    console.log(request.body
        )
        

        try{

            
            const {User, Password} = request.body        
                let usuario = await UserModel.findOne({"User": User})
                
            console.log(usuario)
            if(!usuario){
            response.status(400).json("El usuario no existe")
        
             }
             const correcto = bcryptjs.compare(User.Password,Password)
             if(!correcto){
                response.status(400).json("Datos de acceso incorrectos")
             }

             const payload  ={
                usuario : {id : usuario.id}
             }

             jwt.sign(
                payload,
                "palabra secreta",
                {
                    expiresIn:3600
                },
                (error,token)=>{
                if(error) throw error
                response.status(200).json({token :token, msj: "Acceso concedido"})
                                         

             })
             console.log("adentro")   
            
        }catch(error){

            console.log(error)
            
            response.status(400).json({msj:"Error en el acceso"})




    } 

   
}

module.exports = {
 
    userGuardar,
    userLogin
}

