const mongoose = require("mongoose");

const Pienso = require("../api/models/pienso.model");

const arrayPiensos =[
    {
        "nombre":"ACANA CLASSICS RED MEAT CORDERO PIENSO PARA PERROS",
        "sabor":"Carne y Cordero",
        "edad": "Adulto",
        "animal":"Dog",
        "marca":"Acana"
    },
    {
        "nombre":"ACANA ADULT LIGHT & FIT PIENSO PARA PERROS",
        "sabor":"Pollo y Arroz",
        "edad": "Adulto",
        "animal":"Dog",
        "marca":"Acana"
    },
    {
        "nombre":"AACANA PACÍFICA PIENSO PARA PERROS",
        "sabor":"Salmón y Aranques",
        "edad": "Adulto",
        "animal":"Dog",
        "marca":"Acana"
    },
    {
        "nombre":"ACANA SPORT & AGILITY PIENSO PARA PERROS",
        "sabor":"Pollo y Pavo",
        "edad": "Adulto",
        "animal":"Dog",
        "marca":"Acana"
    }
]

mongoose.connect("mongodb+srv://Alfonso03:HwZrFngYOBLey4UE@cluster0.boe4ybg.mongodb.net/Pienso").then(async () =>{
    const allPienso = await Pienso.find();
    if (allPienso.length > 0){
        await Pienso.collection.drop();
    }
})
.catch((error)=> console.log("error borrnado pienso",error))
.then(async () => {
    const piensoMap = arrayPiensos.map((pienso) => new Pienso(pienso));
    await Pienso.insertMany(piensoMap);
    console.log("Pienso metido correctamente");
})
.catch((error)=> console.log("error metiendo piensos", error))

.finally(()=> mongoose.disconnect())