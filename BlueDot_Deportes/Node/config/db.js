const mongoose = require('mongoose')

const URIDB = 'mongodb://localhost:27017/MINTIC'

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
