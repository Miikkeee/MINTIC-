const mongoose = require('mongoose')

const eventoSchema = mongoose.Schema(
{
 
    id: {
        type: Number,
            required:true,
            trim: false
    },

    FechaEvento: {

        type: String,
        required: true,
        trim: false

    },

    Equipo1: {
        type: String,
        required: true,
        
    },

    Equipo2: {
        type: String,
        required: true,
        
    },

    MarcadorE1: {

        type: Number,
        requiered: true,


    },

    MarcadorE2: {

        type: Number,
        requiered: true,
        

    }


}

)

module.exports = mongoose.model('event', eventoSchema)