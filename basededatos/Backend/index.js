'use strict'

var mongoose = require('mongoose');
const { use } = require('./app');
const url = 'mongodb://localhost:27017/Ticotrip'
const cors = require("cors");

var app = require('./app')
var port = 3700;


mongoose.Promise = global.Promise;


app.use(cors())



mongoose.connect(url)
    .then(() => {
      console.log("******Coneccion funciona*****");
      
       
      app.listen(port, ()=>{
        console.log("Servidor corriendo en url: localhost:3700");
      });
      
      })
    .catch(err => console.log(err))