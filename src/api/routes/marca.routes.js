const express = require("express")
//me voy a traer mis controladores de mi carptera controles aqui para tener en este archivo solo las rutas
const {getMarca,postMarca,putMarca,deleteMarca} = require("../controllers/marca.controllers")

const marcaRoutes = express.Router();

//CRUD
// CREATE = meter informacion a la base de datos que es un POST
//READ = Leer la informacion de la BBDD QUE ES UN GET
//UPDATE = actualizar la informacion de la BBDD que puede ser pacth o un put
//DELETE = borrar la inforamacion de la BBDD que es un DELETE
marcaRoutes.get("/",getMarca)
marcaRoutes.post("/",postMarca)
marcaRoutes.put("/:id",putMarca)
marcaRoutes.delete("/:id",deleteMarca)

module.exports = marcaRoutes;
