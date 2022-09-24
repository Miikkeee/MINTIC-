const express = require('express')
const app = express()

app.get('/', (request,response) => {
    response.send('<h1>Hola mundo</h1>')
    response.end()
})


const puerto = 3000

app.listen(puerto, () =>{
    console.log("servidor activo, puerto: " + puerto)
} )

