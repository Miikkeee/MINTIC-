const { response, json } = require('express')
const express = require('express')
const db = require('./config/db')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
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




app.listen(process.env.PORT || 5000, () => {
    console.log("servidor activo, puerto: " + process.env.PORT)
})

db()
