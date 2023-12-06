const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playersSchema = new Schema({
    nombre: {type: String, required: true}, 
    edad: {type: Number},
    nacionalidad: {type: String},
    posición: {type: String},
    retirado: {type: Boolean},
    liga: {type: String, required: true},
    posicion: {type: String, required: true},
    ligaData: {type: Schema.Types.ObjectId, ref: "Liga"}
     
},
{
    timestamps: true
})

const Player = mongoose.model('Player', playersSchema)
module.exports = Player
