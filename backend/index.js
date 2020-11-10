const express=require('express');
const app=express();
const usuario=require('./routes/usuario');
//const estrato=require('./routes/estrato');
//const electrodomestico=require('./routes/electrodomestico');
//const costo_estrato=require('./routes/costos_estrato');
const costo_mensual=require('./routes/costos_mensual');
// Ajustess 
// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/api',usuario);
app.use('/api/costo_mensual',costo_mensual);

//app.use('/api/modulos',modulos);
//app.use('/api/colegios',colegios);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});
