module.exports={
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM lobros", funcion);
        
    },
    insertar:function (conexion,datos,archivo,funcion) {
        conexion.query("INSERT INTO lobros (nombre,imagen) VALUES (?,?)",[datos.nombre, archivo.filename], funcion);
        
    }
}//