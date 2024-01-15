const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const perrosSchema = new Schema(
    {
        nombre:{type:String, require:true},
        sabor :{type:String,require:true},
        edad:{type:String, require:false},
        animal:{type:String, require:true},
        marca:{type:String, require:true}

    },
    
    { 
        timestamps:true
    });

 const Perros = mongoose.model("perros", perrosSchema);

 module.exports = Perros;