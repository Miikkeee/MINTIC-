const express = require('express')
const router = express.Router();
const eventosCtrl = require('../controllers/eventoController')

router.get('/', function(request,response){  //obtiene todos los eventos 
    try {
        response.send(eventosCtrl.eventoListar())
        response.end()
    } catch (error) {
        console.log("error" + error)
        response.status(400).end()
    }
})

router.get('/:id', eventosCtrl.eventoObtener) //obtiene un solo evento

router.post('/', eventosCtrl.eventoGuardar )  //Guarda un evento

router.put('/:id', eventosCtrl.eventoActualizar) // Actualiza un evento

router.delete('/:id', eventosCtrl.eventoEliminar) // Elimina un evento



module.exports = router