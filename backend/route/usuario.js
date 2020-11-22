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
router.put('/usuario/', (req, res) => {
    const { nombre, apellido, usuario, contrasena, estrato } = req.body;
    const { cedula } = req.params;
    mysqlConnection.query(`UPDATE Registro_usuario SET cedula=?,nombre=?,apellido=?,usuario=?,
        contrasena=?,estrato=?, WHERE cedula=?`,
        [ cedula, nombre, apellido, usuario, contrasena, estrato, cedula], (err, rows, fields) => {
            if (!err) {

                res.json({ status: `usuario Actualizado` });
            } else {
                console.log(err);
            }
        })
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
router.delete('/usuario/:cedula',(req,res)=>{
    const cedula = req.params.cedula;

    if(!cedula){
        res.status(401).json({error: "Debe especificar la cedula del usuario a eliminar."});
    } else {
        const indexUsuario = usuario.findIndex((usuario)=> usuario.cedula ===cedula);
        cedula.splice(indexUsuario, 1);
        const json_usuario = JSON.stringify(usuario);
        fs.writeFileSync('./usuario.json',json_usuario,"utf-8");

        res.status(200).json(usuario);
    }
});





module.exports = router;

