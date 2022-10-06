const { response, json } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function(request, response){
    try {
        response.send('<h1>Hola mundo</h1>')
        response.end()
    } catch (error) {
        console.log("error")
        response.status(400).end()
    }
})

//--------------------
app.get('/acerca', function(request,response){
    response.send("pagina de Acerca de...")
})
//ruta equipos
app.use('/api/equipos', require('./routes/equiposRoute.js'))

//ruta eventos
app.use('/api/eventos', require('./routes/eventosRoute.js'))

//ruta usuarios
app.use('/api/user', require('./routes/userRoute.js'))
//*--------------------------------------------------------------------

const puerto = 3000

app.listen(puerto, () => {
    console.log("servidor activo, puerto: " + puerto)
})

