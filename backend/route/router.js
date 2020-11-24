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



      //Electrodomestico
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


     //Estraro
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
  
  //actualizar un estrato
  router.put('/estrato', (req, res) => {
      const { nombre } = req.body;
      const { codigo } = req.params;
      mysqlConnection.query(`UPDATE Estrato SET codigo=?,nombre=? WHERE codigo=?`,
          [ nombre, codigo], (err, rows, fields) => {
              if (!err) {
  
                  res.json({ status: `Estrato Actualizado exitosamente` });
              } else {
                  console.log(err);
              }
          })
  });//fin actua estrato

  
  //COSTO_ESTRATO
//middleware costo_Estrato
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


//agregar un nuevo costo_Estrato
router.post('/nuevo-cestrato', (req, res) => {
   const { costo, estrato} = req.body;
   let costoE = [costo, estrato]

   let nuevocostoE = `INSERT INTO costo_Estrato(costo, estrato) VALUES (?,?)`;
   mysqlConnection.query(nuevocostoE, costoE, (err, results, fields) => {
       if (err) {
           return console.error(err.message);
       } else {
           res.json({ message: ' costo_estrato creado satisfactoriamente' })
       }
   })//finquery
})//finpost

//actualizar un costo_estrato
router.put('/costo_estrato', (req, res) => {
   const { costo } = req.body;
   const { estrato } = req.params;
   mysqlConnection.query(`UPDATE costo_Estrato SET costo=?,estrato=? WHERE costo=?`,
       [ costo, estrato], (err, rows, fields) => {
           if (!err) {

               res.json({ status: `costo_Estrato Actualizado exitosamente` });
           } else {
               console.log(err);
           }
       })
});//fin actua estrato

module.exports=router;