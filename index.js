const {conexion} = require('./database/connection')
const express = require('express')
const cors = require('cors')
console.log("App de node arrancada")
conexion();

const app = express()
const puerto = 8000

app.use(cors())

app.use(express.json())

const articleRoutes = require('./routes/articles')

app.use("/api", articleRoutes)

app.get('/probando', (req, res) => {
    console.log('Se ha ejecutado la ruta')
    return res.status(200).json([{
        'Nombre': 'Juan Camilo Vallejos'
    },
    {
        'Nombre': 'Juan Camilo Vallejos'
    }])
})



app.listen(puerto, () => {
    console.log("servidor corriendo en el puerto "+puerto)
})


