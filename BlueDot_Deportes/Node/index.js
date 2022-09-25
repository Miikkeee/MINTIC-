const { response, json } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    try {
        response.send('<h1>Hola mundo</h1>')
        response.end()
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
})

app.get('/api/equipos', (request, response) => {  // Enlista todos los equipos
    try {
        const DB = require('./db')
        response.send(DB.equipoListar())
        response.end()
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
})

app.get('/api/equipos/:id', (request, response) => {  //Muestra un equipo en especifico
    try {
        const id = Number(request.params.id)
        const DB = require('./db')
        const equipo = DB.equipoListar().find(equipo => equipo.id == id)
        if (equipo) {
            response.json(equipo)
        } else {
            response.status(404).end()
        }
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
})

app.delete('/api/equipos/:id', (request, response) => {  //Elimina un equipo en especifico
    try {
        const id = Number(request.params.id)
        const DB = require('./db')

        const equipo = DB.equipoListar().filter(equipo => equipo.id != id)
        if (equipo) {
            response.json(equipo)
            response.status(204).end()
        } else {
            response.status(404).end()
        }
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
})


app.post('/api/equipos', (request, response) => {
    try {
        const equipo = request.body
        const DB = require('./db')
        const ids = DB.equipoListar().map(equipo => equipo.id)
        const maxId = Math.max(...ids)

        const newEquipo = {
            id: maxId + 1,
            Deporte: equipo.Deporte,
            Nequipo: equipo.Nequipo
        }

        response.json(newEquipo)
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
})

app.put('/api/equipos/:id', (request, response) => {
    try {
        const id = Number(request.params.id)
        const equipoPut = request.body
        const DB = require('./db')
        const equipo = DB.equipoListar().find(equipo => equipo.id == id)

        const newEquipo = {
            id: equipo.id,
            Deporte: equipoPut.Deporte,
            Nequipo: equipoPut.Nequipo
        }

        response.json(newEquipo)
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }

})

app.put('/api/eventos/:id', (request, response) => {  //inserta evento 
    try {
        const id = Number(request.params.id)
        const eventoPut = request.body
        const DB = require ('./db')
        const evento = DB.evento().find(evento => evento.id ==id)
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


})

app.get('/api/eventos/:id', (request, response) => {

    try {
        const id = Number(request.params.id)
        const DB = require('./db')
        const evento = DB.evento().find(evento => evento.id == id)
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
)

app.delete('/api/eventos/:id', (request, response) => {  //Elimina un evento en especifico
    try {
        const id = Number(request.params.id)
        const DB = require('./db')

        const evento = DB.evento().filter(evento => evento.id != id)
        if (evento) {
            response.json(evento)
            response.status(204).end()
        } else {
            response.status(404).end()
        }
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
})


app.post('/api/eventos', (request, response) => {
    try {
        const evento = request.body

        const DB = require('./db')
        //console.log(DB.evento)
        const ids = DB.evento().map(evento => evento.id)
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
})

app.post('/api/usuarios', (request, response) => {
    console.log("ola")
    try {
        const usuario = request.body
        const DB = require('./db')
        console.log(DB.user)
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
)
const puerto = 3000

app.listen(puerto, () => {
    console.log("servidor activo, puerto: " + puerto)
})

