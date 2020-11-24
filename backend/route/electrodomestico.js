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



//agregar un nuevo Electrodomestico
router.post('/nuevo-electrodomestico',(req,res)=>{
    const{IdElectrodomestico, Codigo, Nombre }=req.body;

    let electrodomestico = [ IdElectrodomestico,Codigo, Nombre ];

    let nuevoElectrodomestico = 'INSERT INTO electrodomestico   (IdElectrodomestico,Codigo, Nombre)VALUES(?,?,?)';

    mysqlConnection.query(nuevoElectrodomestico,electrodomestico,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:'Electrodomestico creado exitosamente'});
        }
    });
});//Fin guardar un usuario

//actualizar un electrodomestico
router.put('/electrodomestico', (req, res) => {
    const { codigo } = req.body;
    const { nombre } = req.params;
    mysqlConnection.query(`UPDATE electrodomestico SET nombre=? WHERE nombre=?`,
        [ codigo,nombre], (err, rows, fields) => {
            if (!err) {

                res.json({ status: `Electrodomestico Actualizado exitosamente`});
            } else {
                console.log(err);
            }
        })
});//fin actua electrodomestico

//ESTE ES ELIMINAR ELECTRODOMESTICO

router.delete('/Electrodomestico/:nombre',(req,res)=>{
    const nombre = req.params.nombre;

    if(!nombre){
        res.status(401).json({error: "Debes especificar el nombre del  electrodomestico que deseas eliminar"});
    } else {
        const indexElectrodomestico = nombre.findIndex((nombre)=> Electrodomestico.nombre ===nombre);
        nombre.splice(indexElectrodomestico , 1);
        const json_Electrodomestico= JSON.stringify(Electrodomestico);
        fs.writeFileSync('./Electrodomestico.json',json_Electrodmestico,"utf-8");

        res.status(200).json(Electrodomestico);
    }
});


module.exports=router;