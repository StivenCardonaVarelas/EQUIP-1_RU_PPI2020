const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/costo_mensual', (req, res) => {
    mysqlConnection.query('SELECT * FROM consto_Mensual ', (err, rows, fiels) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})// fin


module.exports = router;
