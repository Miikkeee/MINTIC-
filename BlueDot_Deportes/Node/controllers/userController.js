const userListar = () => {
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

const userGuardar = async (request, response) => { //Guardar un evento R
    try {
        const usuario = request.body
        console.log(userListar)
        const newUser =         {
            User: usuario.User,
            Password: usuario.Password
        }

        response.json(newUser)
        response.end()
    } catch(error){
        console.log("error", error)
    }
}

module.exports = {
    userListar,
    userGuardar
}