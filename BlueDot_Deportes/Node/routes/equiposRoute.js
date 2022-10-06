const express = require('express')
const router = express.Router();
const equiposCtrl = require('../controllers/equipoController')

router.get('/', equiposCtrl.equipoListar) //Obtiene todos los equipos

router.get('/:id', equiposCtrl.equipoObtener) //obtiene un solo equipo

router.post('/', equiposCtrl.equipoGuardar )  //Guarda un equipo

router.put('/', equiposCtrl.equipoActualizar) // Actualiza un equipo

router.delete('/:id', equiposCtrl.equipoEliminar) // Elimina un equipo


module.exports = router