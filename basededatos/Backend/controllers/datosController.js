'use strict'

//aqui va el crud del proyecto

var Proyecto = require('../models/Datos');

var controller = {
    home: function(req, res){
        res.status(200).send(
            "<h2>Pagina Inicio API DWI</h2>"
        );       
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'Metodo Test del controlador de Proyectos'
        });
    },

	saveProyecto: function(req, res){
		var proyecto = new Proyecto();

		var params = req.body;
		
        proyecto.contactos = params.contactos;
		proyecto.descripcion = params.descripcion;
		proyecto.nombre = params.nombre;
		proyecto.precio = params.precio;
		proyecto.ubicacion = params.ubicacion;
 

		
        proyecto.save((err, projectStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({proyecto: projectStored});
		});
	},

	getProyectoid: async function(req, res){
		try {
			let proyecto = await Proyecto.findById(req.params.id);
	
			if(!proyecto) {
				res.status(404).json({ msg: 'No existe el producto' })
			}
		   
			res.json(proyecto);
			

			
		} catch (error) {
			console.log(error);
			res.status(500).send('Hubo un error');
		}
	},

 

	getProyectos: async  function(req, res){
		try {

			const productos = await Proyecto.find();
			res.json(productos)
			
		} catch (error) {
			console.log(error);
			res.status(500).send('Hubo un error');
		}
	},

	updateProyecto: function(req, res){
		var proyectoId = req.params.id;
		var update = req.body;

		Proyecto.findByIdAndUpdate(proyectoId, update, {new:true}, (err, proyectoUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!proyectoUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

			return res.status(200).send({
				proyecto: proyectoUpdated
			});
		});

	},

	deleteProyecto: function(req, res){
		var proyectoId = req.params.id;

		Proyecto.findByIdAndRemove(proyectoId, (err, proyectoRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!proyectoRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				proyecto: proyectoRemoved
			});
		});
	}
};


module.exports = controller;