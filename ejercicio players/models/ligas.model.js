const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ligasSchema = new Schema({
    nombre: {type: String, required: true}, 
    pais: {type: String, required: true},
    nivel: {type: String, required: true},
    numeroEquipos: {type: Number, required: true},
    fundacion: {type: Number, required: true}
},
{
    timestamps: true
})

const Liga = mongoose.model('Liga', ligasSchema)
module.exports = Liga