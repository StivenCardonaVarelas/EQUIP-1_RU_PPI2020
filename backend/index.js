const express = require('express');
const app=express();
//const routes=require('./routes/routes');
//const modulos=require('./routes/modulos');
const estrato=require('./routes/Estrato');
const Cestrato=require('./routes/costo_Estrato');
const aestrato=require('./routes/Estrato');
const electrodomestico=require('./routes/electrodomestico');
const Cmensual=require('./routes/costo_mensual');
const usuario=require('./routes/usuario')





//ajustes
app.set('port', 3000); //puerto unico //firewall


//middleware
app.use(express.json());

//ajustes

app.use('/api', estrato);
app.use('/api', Cestrato);
app.use('/api', aestrato);
app.use('/api', electrodomestico);
app.use('/api', Cmensual);
app.use('/api', usuario);
//app.use('/api/modulos', modulos);
//app.use('/api/colegios', colegios)

app.listen(app.get('port'), ()=>{
    console.log('listening on port'+ app.get('port'));
});