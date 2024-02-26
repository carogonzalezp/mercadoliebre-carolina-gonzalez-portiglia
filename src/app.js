const path = require("path");
// requerir express
const express = require("express")
// guardar sus funcionabilidades dentro de una variable
const app = express();
//guardo la ruta de la carpeta public
const publicPath = path.resolve(__dirname, "./public")

app.use(express.static("public"));

// poner un hola mundo con un "listen"
app.listen(3001, () => console.log("Servidor corriendo en: http://localhost:3001/"));

//Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder 
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.post("/login", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.post("/register", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});