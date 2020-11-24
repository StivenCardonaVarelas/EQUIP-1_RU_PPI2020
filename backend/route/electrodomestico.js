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
router.post('/nuevo-electrodomestico',(req,res)=>{
    const{IdElectrodomestico, Codigo, Nombre }=req.body;

    let electrodomestico = [ IdElectrodomestico,Codigo, Nombre ];

    let nuevoElectrodomestico = `INSERT INTO electrodomestico   (IdElectrodomestico,Codigo, Nombre)VALUES(?,?,?)`;

    mysqlConnection.query(nuevoElectrodomestico,electrodomestico,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`Electrodomestico creado exitosamente`});
        }
    });
});//Fin guardar un usuario

//actualizar un electrodomestico
router.put('/electrodomestico/:Codigo', (req, res) => {
    const { IdElectrodomestico, Nombre } = req.body;

    const { Codigo} = req.params;

    mysqlConnection.query(`UPDATE electrodomestico SET IdElectrodomestico = ?, Nombre = ?  WHERE Codigo = ?`,

        [ IdElectrodomestico, Nombre, Codigo ], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `Electrodomestico  Actualizado` });
            } else {
                console.log(err);
            }
        });
});

//ESTE ES ELIMINAR ELECTRODOMESTICO

router.delete('/electrodomestico/:Codigo',(req,res)=>{
    const {Codigo} = req.params;
    mysqlConnection.query('DELETE  FROM electrodomestico  WHERE Codigo=? ', [Codigo], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'Eletrodomestico eliminado'});
        }else{
            console.log(err);
        }
    });
});


//buscar electrodomestico 
router.get('/electrodomestico/:Codigo',(req,res)=>{
    const {Codigo} = req.params; //codigo  númerico entero
    mysqlConnection.query('SELECT * FROM electrodomestico  WHERE Codigo=?', [Codigo],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar 
module.exports=router;