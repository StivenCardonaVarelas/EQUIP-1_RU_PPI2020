const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/costo_mensual', (req, res) => {
    mysqlConnection.query('SELECT * FROM costo_Mensual ', (err, rows, fiels) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})// fin
//agregar un nuevo costo_mensual
router.post('/nuevo-costo_mensual', (req, res) => {
    const { electrodomestico, cantidad, potencia, horas_uso, consumo_diario, consumo_mensual} = req.body;
    let costo_mensual = [electrodomestico, cantidad, potencia, horas_uso, consumo_diario, consumo_mensual]
 
    let nuevoCosto_mensual = `INSERT INTO consumo_Mensual(electrodomestico, cantidad, potencia, horas_uso, consumo_diario, consumo_mensual) VALUES (?,?,?,?,?,?)`;
    mysqlConnection.query(nuevoCosto_mensual, costo_mensual, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        } else {
            res.json({ message: ' costo mensual creado satisfactoriamente' })
        }
    })//finquery
})//finpost
//actualizar un costo_mensual
router.put('/costo_mensual', (req, res) => {
    const {  cantidad, potencia, horas_uso, consumo_diario, consumo_mensual } = req.body;
    const { electrodomestico } = req.params;
    mysqlConnection.query(`UPDATE costo_Mensual SET electrodomestico, cantidad, potencia, horas_uso, consumo_diario, consumo_mensual WHERE electrodomestico=?`,
        [electrodomestico,  cantidad, potencia, horas_uso, consumo_diario, consumo_mensual  ], (err, rows, fields) => {
            if (!err) {
 
                res.json({ status: `costo_mensual Actualizado exitosamente` });
            } else {
                console.log(err);
            }
        })
});//fin actua mensual

//buscar costo mensual 
router.get('/costo_mensual/:IdcostoM',(req,res)=>{
    const {IdcostoM} = req.params; //cedula del usuario númerico entero
    mysqlConnection.query(' SELECT * FROM costo_Mensual WHERE IdcostoM =?', [IdcostoM],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar 

module.exports = router;
