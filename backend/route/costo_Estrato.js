const express=require('express');//tabnine
const router=express.Router();
const mysqlConnection =require('../db/db');
//colocar middleware
router.get('/costo_Estrato', (req, res) => {
    //callbacks
    mysqlConnection.query('SELECT * FROM costo_Estrato', (err, rows, fields) => {
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






module.exports=router;