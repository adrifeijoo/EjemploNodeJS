var express = require('express');
var router = express.Router();
const librosController=require("../controllers/librosController");

var multer = require('multer');
//const { storage } = require('debug/src/browser');
var fecha= Date.now();

var rutaAlmacen=multer.diskStorage(
    {
        destination:function(request, file, callback) {
        callback(null,'./public/images/');
        },
        filename:function(request, file, callback) {
            console.log(file);
            callback(null,fecha+"_"+file.originalname);
        }
    }
    
);
var caragar= multer({storage:rutaAlmacen});

/* GET home page. */
router.get('/',librosController.index);
router.get('/crear',librosController.crear);
router.post("/",caragar.single("archivo"),librosController.guardar);


module.exports = router;
