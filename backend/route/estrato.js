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


//agregar un nuevo estrato
router.post('/nuevo-estrato',(req,res)=>{
    const{IdCodigoe, Nombre}=req.body;

    let estrato = [IdCodigoe, Nombre ];

    let nuevoEstrato = `INSERT INTO Estrato  (IdCodigoe,Nombre)VALUES(?,?)`;

    mysqlConnection.query(nuevoEstrato,estrato,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`Estrato creado exitosamente`});
        }
    });
});//Fin guardar un Estrato




//actualizar un estrato
router.put('/estrato/:IdCodigoe', (req, res) => {
    const { Nombre } = req.body;

    const { IdCodigoe} = req.params;

    mysqlConnection.query(`UPDATE Estrato SET Nombre = ? WHERE IdCodigoe = ?`,

        [ Nombre, IdCodigoe], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `Estrato  Actualizado` });
            } else {
                console.log(err);
            }
        });
});


//eliminar
router.delete('/estrato/:IdCodigoe', (req,res) => {
    const {IdCodigoe} = req.params;
    mysqlConnection.query('DELETE  FROM Estrato WHERE IdCodigoe =?', [IdCodigoe], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'Estrato eliminado'});
        }else{
            console.log(err);
        }
    });
});

//bucar
router.get('/estrato/:IdCodigoe',(req,res)=>{
    const {IdCodigoe} = req.params; //cedula del usuario númerico entero
    mysqlConnection.query('SELECT * FROM Estrato WHERE IdCodigoe =?', [IdCodigoe],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar 

module.exports=router;