const express = require('express')
const router = express.Router();
const userCtrl = require('../controllers/userController')

router.get('/', function(request,response){  //obtiene todos los eventos R
    try {
        response.send(userCtrl.userListar())
        response.end()
    } catch (error) {
        console.log("error" + error)
        response.status(400).end()
    }
})

router.post('/', userCtrl.userGuardar )  //Guarda un evento





module.exports = router