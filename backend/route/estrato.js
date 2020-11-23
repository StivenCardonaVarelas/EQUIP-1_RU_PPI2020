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
    mysqlConnection.query(`UPDATE Estrato SET nombre=? WHERE nombre=?`,
        [ nombre, codigo], (err, rows, fields) => {
            if (!err) {

                res.json({ status: `Estrato Actualizado exitosamente` });
            } else {
                console.log(err);
            }
        })
});//fin actua estrato


//ESTE ES ELIMINAR ESTRATO

router.delete('/Estrato/:nombre',(req,res)=>{
    const nombre = req.params.nombre;

    if(!nombre){
        res.status(401).json({error: "Debes especificar el nombre del  estrato que deseas eliminar"});
    } else {
        const indexEstrato = Estrato.findIndex((Estrato)=> Estrato.nombre ===nombre);
        Estrato.splice(indexEstrato, 1);
        const json_Estrato= JSON.stringify(Estrato);
        fs.writeFileSync('./Estrato.json',json_Estrato,"utf-8");

        res.status(200).json(Estrato);
    }
});


module.exports=router;