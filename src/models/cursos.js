const mongoose = require("mongoose")

const cursosModel = mongoose.Schema({
    nombre_curso:{
        type: String,
        required: true
    },
    cod_curso:{
        type: Number,
        required: true
    },
    profesor:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Cursos", cursosModel);