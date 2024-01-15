const express = require("express")

const {getGatos,postGatos,putGatos,deleteGatos} = require("../controllers/gatos.controllers")

const gatosRoutes = express.Router();


gatosRoutes.get("/",getGatos)
gatosRoutes.post("/",postGatos)
gatosRoutes.put("/:id",putGatos)
gatosRoutes.delete("/:id",deleteGatos)

module.exports = gatosRoutes;