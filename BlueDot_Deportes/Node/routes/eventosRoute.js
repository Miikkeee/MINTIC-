const express = require('express')
const router = express.Router();
const eventosCtrl = require('../controllers/eventoController')

router.get('/', eventosCtrl.eventoListar) //En lista
    
router.get('/:id', eventosCtrl.eventoObtener) //obtiene un solo evento

router.post('/', eventosCtrl.eventoGuardar )  //Guarda un evento

router.put('/', eventosCtrl.eventoActualizar) // Actualiza un evento

router.delete('/:id', eventosCtrl.eventoEliminar) // Elimina un evento



module.exports = router