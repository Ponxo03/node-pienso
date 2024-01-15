const mongoose = require("mongoose");

//Crear una variable que acorte lo que estamos poniendo

const Schema = mongoose.Schema;

const marcaSchema = new Schema(
    {
        nombre:{type:String, require:true},
        sabor :{type:String,require:true},
        edad:{type:String, require:false},
        animal:{type:String, require:true},
        marcas:[{type: Schema.Types.ObjectId, ref:"pienso"}]
       
    });
// relacciona mi schema con mi modelo de la base datos
 const Marca = mongoose.model("Marca", marcaSchema);

 module.exports = Marca;


