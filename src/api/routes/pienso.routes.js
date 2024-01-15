const express = require("express")
//me voy a traer mis controladores de mi carptera controles aqui para tener en este archivo solo las rutas
const {getPienso,postPienso,putPienso,deletePienso} = require("../controllers/pienso.controllers")

const piensoRoutes = express.Router();

//CRUD
// CREATE = meter informacion a la base de datos que es un POST
//READ = Leer la informacion de la BBDD QUE ES UN GET
//UPDATE = actualizar la informacion de la BBDD que puede ser pacth o un put
//DELETE = borrar la inforamacion de la BBDD que es un DELETE
piensoRoutes.get("/",getPienso)
piensoRoutes.post("/",postPienso)
piensoRoutes.put("/:id",putPienso)
piensoRoutes.delete("/:id",deletePienso)

module.exports = piensoRoutes;
