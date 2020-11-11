const express=require('express');//tabnine
const router=express.Router();
const mysqlConnection =require('../db/db');
//colocar middleware
router.get('/electrodomestico', (req, res) => {
    //callbacks
    mysqlConnection.query('SELECT * FROM electrodomestico', (err, rows, fields) => {
        //si no hay error
        if (!err) {
            //si es verdadero
            res.json(rows);
            //si no es verdadero
        } else {
            console.log(err);

        }



    })//fin query 
})//fin del get



//agregar un nuevo Electrodomestico
router.post('/electrodomestico', (req, res) => {
    const { codigo, nombre} = req.body;
    let electro = [codigo, nombre]

    let nuevoelectrodomestico = `INSERT INTO electrodomestico(codigo, nombre) VALUES (?,?)`;
    mysqlConnection.query(nuevoelectrodomestico, electro, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        } else {
            res.json({ message: ' electrodomestico creado satisfactoriamente' })
        }
    })//finquery
})//finpost

//actualizar un electrodomestico
router.put('/electrodomestico', (req, res) => {
    const { codigo } = req.body;
    const { nombre } = req.params;
    mysqlConnection.query(`UPDATE electrodomestico SET codigo=?,nombre=? WHERE codigo=?`,
        [ codigo,nombre], (err, rows, fields) => {
            if (!err) {

                res.json({ status: `Electrodomestico Actualizado exitosamente` });
            } else {
                console.log(err);
            }
        })
});//fin actua electrodomestico



module.exports=router;