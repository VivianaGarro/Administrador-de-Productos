const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conectado con DB"))
    .catch(err => console.log("Error al conectarse con DB", err));