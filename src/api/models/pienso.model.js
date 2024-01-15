const mongoose = require("mongoose");

//Crear una variable que acorte lo que estamos poniendo

const Schema = mongoose.Schema;

const piensoSchema = new Schema(
    {
        nombre:{type:String, require:true},
        sabor :{type:String,require:true},
        edad:{type:String, require:false},
        animal:{type:String, require:true},
        marca:{type:String, require:true}
      

    },{ // te genera la fecha y hora 
        timestamps:true
    });

// relacciona mi schema con mi modelo de la base datos
 const Pienso = mongoose.model("pienso", piensoSchema);

 module.exports = Pienso;


