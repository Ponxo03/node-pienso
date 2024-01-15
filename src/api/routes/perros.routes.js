const express = require("express")

const {getPerros,postPerros,putPerros,deletePerros} = require("../controllers/perros.controllers");

const perrosRoutes = express.Router();


perrosRoutes.get("/",getPerros)
perrosRoutes.post("/",postPerros)
perrosRoutes.put("/:id",putPerros)
perrosRoutes.delete("/:id",deletePerros)

module.exports = perrosRoutes;
