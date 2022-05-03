'use strict'

var express = require('express');
var ProyectoController = require('../controllers/datosController');

var router = express.Router();


//aqui se llama los metodos del crud echos en los controllers
router.get('/', ProyectoController.home);

router.get('/test', ProyectoController.test);

router.post('/save-datos', ProyectoController.saveProyecto);
router.get('/datosid/:id?/', ProyectoController.getProyectoid);
router.get('/getdatos', ProyectoController.getProyectos);
router.put('/proyecto/:id', ProyectoController.updateProyecto);
router.delete('/proyecto/:id', ProyectoController.deleteProyecto);



module.exports = router;
 