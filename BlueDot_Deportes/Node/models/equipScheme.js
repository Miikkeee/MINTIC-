const mongoose = require('mongoose')

const equipoSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required:true,
            trim: false
        },
        Deporte:{
            type: String,
            required : true,
            trim : true
        },
        Nequipo:{
            type: String,
            required: true,
            trim: true
        }
    }
)
module.exports = mongoose.model("equipo", equipoSchema)