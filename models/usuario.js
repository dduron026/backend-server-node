var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({

    name: {type: String, required: [true, 'el nombre es necesario']},
    email: {type: String, unique: true, required: [true, 'el correo es necesario']},
    password: {type: String, required: [true, 'la contrasena es necesario']},
    img: {type: String, required: false},
    role: {type: String, required: true, default: 'USER_ROLE'}
});

module.exports = mongoose.model('Usuario', usuarioSchema);