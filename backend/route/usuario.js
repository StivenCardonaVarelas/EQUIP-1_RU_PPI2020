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
router.post('/nuevo-usuario',(req,res)=>{
    const{Cedula, Nombre, Apellido, Usuario, Contraseña, Estrato }=req.body;

    let usuario = [Cedula, Nombre, Apellido, Usuario, Contraseña, Estrato ];

    let nuevoUsario = `INSERT INTO Registro_usuario   (Cedula,Nombre, Apellido, Usuario, Contraseña, Estrato)VALUES(?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoUsario,usuario,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`usuario creado exitosamente`});
        }
    });
});//Fin guardar un usuario

//actilizar
router.put('/usuario/:Cedula', (req, res) => {
    const { Nombre, Apellido, Usuario, Contraseña, Estrato } = req.body;

    const { Cedula } = req.params;

    mysqlConnection.query(`UPDATE Registro_usuario SET Nombre = ?, Apellido = ?, Usuario = ?, Contraseña = ?, Estrato = ?  WHERE Cedula = ?`,

        [ Nombre, Apellido, Usuario, Contraseña, Estrato, Cedula ], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `Usuario Actualizado` });
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

