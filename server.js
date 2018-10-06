const express = require('express');
const mongoose = require('mongoose');
const appRoutes = require('./routes/app');
const usuarioRoutes = require('./routes/usuarios')

const app = express();





//RUTAS
app.use('/usuarios', usuarioRoutes);
app.use('/', appRoutes);


var options = {
    useNewUrlParser: true
}

//CONEXION BD
mongoose.connect('mongodb://localhost:27017/hospitalDB', options,(err, res) => {

    if(err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
    

});

//color verde en la consola   \x1b[32m%s\x1b[0m'



app.listen(3000, () => {console.log('server en puerto 3000')});