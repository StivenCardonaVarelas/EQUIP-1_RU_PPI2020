const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/usuario', (req, res) => {
    mysqlConnection.query('SELECT * FROM Registro_usuario ', (err, rows, fiels) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})// fin

//crear usuario
router.post('/nuevo-usuario', (req, res) => {
    const { usuario, usuarioprefijo } = req.body;//1 Captura
    let usuarioArreglo = [usuario, usuarioprefijo];// Arreglo json
    //Definir el scrip sql en una variable
    let nuevoUsuario = 'SELECT * FROM Registro_usuario(modulo,mod) value(?,?)';
    mysqlConnection.query(nuevoUsuario, usuarioArreglo, (err, results, fields) => {
        //Si hay error
        if (!err) {
            //Verdadero
            return console.error(err.message);
        } else {//Si no
            //Falso
            res.json({ message: 'usuario creado' });
        }//Fin Si
    })
})//Fin guardar un usuario

//actilizar


router.put('/usuario/:cedula', (req, res) => {
    const {  Nombre, Apellido, Usuario, Contraseña, Estrato  } = req.body;

    const {  Cedula } = req.params;

    mysqlConnection.query(`UPDATE Registro_usuario SET Nombre= ?,Apellido= ?,Usuario= ?,
        Contraseña= ?,Estrato= ? WHERE Cedula= ?`,

        [  Nombre, Apellido, Usuario, Contraseña, Estrato, Cedula], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `usuario Actualizado` });
            } else {
                console.log(err);
            }
        });
});


//bucar
router.get('/usuario/:cedula',(req,res)=>{
    const {cedula} = req.params; //cedula del usuario númerico entero
    mysqlConnection.query('SELECT * FROM Registro_usuario WHERE cedula =?', [cedula],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar 

//eliminar
router.delete('/usuario/:cedula', (req,res) => {
    const {cedula} = req.params;
    mysqlConnection.query('DELETE  FROM Registro_usuario WHERE cedula =?', [cedula], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'usuario eliminado'});
        }else{
            console.log(err);
        }
    });
});




module.exports = router;

