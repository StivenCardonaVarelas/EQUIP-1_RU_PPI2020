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
    const { IdcostoM, Electrodomestico, Cantidad, Potencia, Horas_uso, Consumo_diario, Consumo_mensual } = req.body;//1 Captura
    let costo_mensual = [IdcostoM, Electrodomestico, Cantidad, Potencia, Horas_uso, Consumo_diario, Consumo_mensual];// Arreglo json
    //Definir el scrip sql en una variable
    let nuevoCosto_mensual = 'INSERT  INTO costo_Mensual(IdcostoM, Electrodomestico, Cantidad, Potencia, Horas_uso, Consumo_diario, Consumo_mensual) values (?,?,?,?,?,?,?)';
    mysqlConnection.query(nuevoCosto_mensual, costo_mensual, (err, results, fields) => {
        //Si hay error
        if (err) {
            //Verdadero
            return console.error(err.message);
        } else {//Si no
            //Falso
            
            res.json({ message: 'costo mensual creado ' + Electrodomestico });
        }//Fin Si
    })
})//Fin guardar un costo mensual


//actualizar un costo_mensual
//actilizar
router.put('/costo_mensual/:IdcostoM', (req, res) => {
    const {Electrodomestico, Cantidad, Potencia, Horas_uso, Consumo_diario,Consumo_mensual} = req.body;

    const {IdcostoM} = req.params;

    mysqlConnection.query(`UPDATE costo_Mensual  SET Electrodomestico= ?, Cantidad = ?, Potencia = ?, Horas_uso = ?, Consumo_diario= ?, Consumo_mensual= ?  WHERE IdcostoM = ?`,

        [ Electrodomestico, Cantidad, Potencia, Horas_uso, Consumo_diario,Consumo_mensual, IdcostoM], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `Consumo Mensual Actualizado` });
            } else {
                console.log(err);
            }
        });
});


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

router.delete('/costo_mensual/:IdcostoM', (req,res) => {
    const {IdcostoM} = req.params;
    mysqlConnection.query('DELETE  FROM costo_Mensual WHERE IdcostoM =?', [IdcostoM], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'costo mensual eliminado'});
        }else{
            console.log(err);
        }
    });
});




module.exports = router;
