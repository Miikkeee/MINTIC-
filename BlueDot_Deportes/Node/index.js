const { response } = require('express')
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

const puerto = 3000

app.listen(puerto, () => {
    console.log("servidor activo, puerto: " + puerto)
})

