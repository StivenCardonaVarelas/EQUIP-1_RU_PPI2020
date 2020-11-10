const mysql = require('mysql');
const router = require('../routes/usuario');
const { route } = require('../routes/router');

//parámetros de conexión 

const mysqlConnection = mysql.createConnection({
    host: 'bdxax3bgzm7h640rmaqt-mysql.services.clever-cloud.com',
    user: 'uqm1smzdnu6nojlb',
    password: 'elF7yxgo07t0ic2J59Gl',
    database: 'bdxax3bgzm7h640rmaqt',
    multipleStatements: true
})

// establecer la conxión a la base de datos

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Base de datos conectada')
    }
});



module.exports=mysqlConnection;