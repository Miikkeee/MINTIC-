const mongoose = require('mongoose')

const Userschema = mongoose.Schema(
{

   
    User: {
        type:String,
        required: true
    },

    Password: {

        type: String,
        required: true,
        trim: false


    }

}
)

module.exports = mongoose.model('User', Userschema)