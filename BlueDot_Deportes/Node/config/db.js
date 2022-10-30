const mongoose = require('mongoose')

const URIDB = 'mongodb+srv://dbUser:sergio@cluster0.ewj3omq.mongodb.net/MINTIC'

module.exports = () => {
    const conn = () =>{
        mongoose.connect(
            URIDB,
            {
                keepAlive : true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (error)=>{
                if(error){
                    console.log("Error conexion " + error)
                }else{
                    console.log("Conectado")
                }
            }
        )
    }
    conn()
}
