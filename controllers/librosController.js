var conexion=require('../config/conexion');
//const libro = require('../model/libro');
var libro= require("../model/libro");

module.exports={

    index:function(req,res){

        
        libro.obtener(conexion,function (err,datos) {
            console.log(datos);
            res.render('libros/index', { title: 'Aplicación',libros:datos });
        });

        
    },
    crear:function (req,res) {
        res.render('libros/crear');
    },
    guardar:function (req,res) {
        console.log(req.body);
        console.log(req.file.filename);

        libro.insertar(conexion,req.body,req.file,function (err) {
             res.redirect('/libros');
            
        });
    }

}