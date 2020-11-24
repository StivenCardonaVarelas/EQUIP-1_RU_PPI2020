const express=require('express');//tabnine
const router=express.Router();
const mysqlConnection =require('../db/db');




//colocar middleware
router.get('/estrato', (req, res) => {
    //callbacks
    mysqlConnection.query('SELECT * FROM Estrato', (err, rows, fields) => {
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

//bucar
router.get('/estrato/:Nombre',(req,res)=>{
    const {Nombre} = req.params; //DATO ESTRATO númerico entero
    mysqlConnection.query('SELECT * FROM Estrato WHERE Nombre =?', [Nombre],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar



//agregar un nuevo estrato
router.post('/nuevo-estrato', (req, res) => {
    const { codigo, nombre} = req.body;
    let estrato = [codigo, nombre]

    let nuevoEstrato = `INSERT INTO Estrato(codigo, nombre) VALUES (?,?)`;
    mysqlConnection.query(nuevoEstrato, estrato, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        } else {
            res.json({ message: ' estrato creado satisfactoriamente' })
        }
    })//finquery
})//finpost

router.put('/estrato/:Idcodigoe', (req, res) => {
    const { nombre } = req.body;
    const { codigo } = req.params;
    mysqlConnection.query(`UPDATE Estrato SET nombre=? WHERE codigo=?`,
        [ nombre, codigo], (err, rows, fields) => {
            if (!err) {

                res.json({ status: `Estrato Actualizado exitosamente` });
            } else {
                console.log(err);
            }
        })
});//fin actua estrato



//ESTE ES ELIMINAR ESTRATO

router.delete('/Estrato/:codigo',(req,res)=>{
    const {codigo} = req.params;
         mysqlConnection.query(`delete from Estrato WHERE codigo=?`,
        [codigo], (err, rows, fields) => {
            if (!err) {

                res.json({ status: `Estrato Borrado exitosamente` });
            } else {
                console.log(err);
            }
        })
    }
);

module.exports=router;