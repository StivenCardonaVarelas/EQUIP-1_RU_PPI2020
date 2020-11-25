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



//crear costo estrato
router.post('/nuevo-costo_estrato',(req,res)=>{
    const{IdCodigo, Estrato, Costo}=req.body;

    let costo_estrato = [IdCodigo, Estrato, Costo];

    let nuevoCosto_estrato = `INSERT INTO costo_Estrato   (IdCodigo, Estrato, Costo)VALUES(?,?,?)`;

    mysqlConnection.query(nuevoCosto_estrato,costo_estrato,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`Costo Estrato  creado exitosamente`});
        }
    });
});//Fin guardar un usuario

//actualizar un costo_estrato
router.put('/costo_Estrato/:IdCodigo', (req, res) => {
    const { Estrato, Costo} = req.body;

    const { IdCodigo } = req.params;

    mysqlConnection.query(`UPDATE costo_Estrato  SET  Estrato = ?, costo = ?  WHERE IdCodigo = ?`,

        [ Estrato, Costo, IdCodigo], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `Costo Estrato  Actualizado` });
            } else {
                console.log(err);
            }
        });
});

//ESTE ES ELIMINAR COSTO_ESTRATO

router.delete('/costo_Estrato/:IdCodigo', (req,res) => {
    const {IdCodigo } = req.params;
    mysqlConnection.query('DELETE  FROM costo_Estrato  WHERE IdCodigo =?', [IdCodigo] , (err, rows, fields) =>{
        if(!err){
            res.json({ status:'Costo Estrato eliminado'});
        }else{
            console.log(err);
        }
    });
});


 
//bucar
router.get('/costo_Estrato/:IdCodigo',(req,res)=>{
    const {IdCodigo} = req.params; //IdCodigo númerico entero
    mysqlConnection.query('SELECT * FROM costo_Estrato  WHERE IdCodigo =?', [IdCodigo],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar 


module.exports=router;