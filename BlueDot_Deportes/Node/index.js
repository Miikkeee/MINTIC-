const express = require('express')
const app = express()

app.get('/', (request,response) => {
    response.send('<h1>Hola mundo</h1>')
    response.end()
})

app.get('/api/equipos', (request,response) => {  // Enlista todos los equipos
    const DB = require('./db')
    response.send(DB.equipoListar())
    response.end()
})

app.get('/api/equipos/:id', (request,response) => {  //Muestra un equipo en especifico
    const id = Number(request.params.id)
    const DB = require('./db')
    const equipo = DB.equipoListar().find(equipo => equipo.id == id)

    if(equipo){
        response.json(equipo)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/equipos/:id', (request,response) => {
    const id = Number(request.params.id)
    const DB = require('./db')
    const equipo = DB.equipoListar().filter(equipo => equipo.id != id)
    response.status(204).end()
})



const puerto = 3000

app.listen(puerto, () =>{
    console.log("servidor activo, puerto: " + puerto)
} )

