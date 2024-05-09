//Llamada de paquetes
const express = require("express")
const mongoose = require("mongoose")
const cursos = require("./routes/cursos")

//Configuraciones
const appTienda = express();
const puerto = 5000;

//Rutas
appTienda.use(express.json())
appTienda.get("/", (req, res) => {res.send("Pagina de la tienda de prueba")})
appTienda.get("/bienvenida", (req, res) => {res.send("Pagina de bienvenida")})
appTienda.get("/nosotros", (req, res) => {res.send("VISION Y MISION")})
appTienda.use("/api-universidad", cursos)


//Ejecución
mongoose.connect("mongodb+srv://empleado01:empleado01@cluster-certus.7pgpfi8.mongodb.net/bd_universidad?retryWrites=true&w=majority&appName=cluster-certus")
.then(() => {console.log("conexión realizada a mongodb atlas")})
.catch((error) => {console.log(error)})

appTienda.listen(puerto, () => {console.log("sevidor funcionando en el puerto: "+puerto)} )