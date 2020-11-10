const express = require('express');
const app=express();
//const routes=require('./routes/routes');
//const modulos=require('./routes/modulos');
const estrato=require('./routes/estrato');
const Cestrato=require('./routes/costo_Estrato');



//ajustes
app.set('port', 3000); //puerto unico //firewall


//middleware
app.use(express.json());

//ajustes

app.use('/api', estrato);
app.use('/api', Cestrato);
//app.use('/api/modulos', modulos);
//app.use('/api/colegios', colegios)

app.listen(app.get('port'), ()=>{
    console.log('listening on port'+ app.get('port'));
});