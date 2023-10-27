const mongoose = require("mongoose")

const conexion = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/blog')
        console.log('conectados a la base de datos mi blog !!')
    }catch(error){
        console.log(error)
        throw new Error('No se ha podido conectar a la base de datos')
    }
}

module.exports = {
    conexion
}