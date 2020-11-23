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

//ESTE ES ELIMINAR COSTO_ESTRATO

router.delete('/costo_Estrato/:estrato',(req,res)=>{
    const estrato = req.params.estrato;

    if(!estrato){
        res.status(401).json({error: "Debes especificar el estrato del costo por estrato que deseas eliminar"});
    } else {
        const indexCosto_estrato = Costo_estrato.findIndex((Costo_estrato)=> Costo_estrato.Estrato ===Estrato);
        Estrato.splice(indexCosto_estrato, 1);
        const json_Costo_estrato= JSON.stringify(Costo_estrato);
        fs.writeFileSync('./costo_Estrato.json',json_Costo_estrato,"utf-8");

        res.status(200).json(Costo_estrato);
    }
});





module.exports=router;