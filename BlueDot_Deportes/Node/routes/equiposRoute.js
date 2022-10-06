const express = require('express')
const router = express.Router();
const equiposCtrl = require('../controllers/equipoController')

router.get('/', function(request,response){  //obtiene todos los equipos
    try {
        response.send(equiposCtrl.equipoListar())
        response.end()
    } catch (error) {
        console.log("error" + error)
        response.status(400).end()
    }
})

router.get('/:id', equiposCtrl.equipoObtener) //obtiene un solo equipo

router.post('/', equiposCtrl.equipoGuardar )  //Guarda un equipo

router.put('/:id', equiposCtrl.equipoActualizar) // Actualiza un equipo

router.delete('/:id', equiposCtrl.equipoEliminar) // Elimina un equipo


module.exports = router