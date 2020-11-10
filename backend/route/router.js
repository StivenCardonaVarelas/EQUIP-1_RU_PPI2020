const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');


router.get('/usuario',(req,res)=>{
mysqlConnection.query('SELECT * from Registro_usuario',(err,rows,fiels)=>{
if(!err){
   res.json(rows); 
}else{
console.log(err);
}});
})// fin

router.post('/nuevo-usario',(req,res)=>{
const {cedula,nombre,apellido,usuario,contrasena,estrato}=req.body;

let Usuario =[cedula,nombre,apellido,usuario,contrasena,estrato];

let nuevoUsuario=`INSERT INTO Registro_usuario(cedula,nombre,apellido,usuario,contrasena,estrato)
VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoUsuario,Usuario,(err,results,fields)=>{
if(err){
   return console.error(err.message);
}else{
   res.json({message:`usuario nuevo`})
}
})});

router.put('/usuario/:cedula',(req,res)=>{
   const {nombre,apellido,usuario,contrasena,estrato}=req.body;
    const {cedula} =req.params;
   
   
   mysqlConnection.query(`UPDATE usuario SET cedula=?,nombre=?,apellido=?,usuario=?,
   contrasena=?,estrato=?, WHERE cedula=?`,
   [nombre,apellido,usuario,contrasena,estrato,cedula],(err,rows,fields)=>{
   if(!err){
      
      res.json({status:`usuario Actualizado`});
   }else{
      console.log(err);
   }
   })});


   router.get('/usuario/:cedula ',(req,res)=>{
      const {cedula } =req.params;
      mysqlConnection.query('SELECT * from Registro_usuario where cedula= '+cedula,(err,rows,fiels)=>{
      if(!err){
         res.json(rows); 
      }else{
      console.log(err);
      }});
      })// fin

module.exports=router;