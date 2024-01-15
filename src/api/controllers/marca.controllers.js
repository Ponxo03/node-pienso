const Marca = require("../models/marca.model")

const getMarca = async (req, res) =>{
    try {
        // me voy a crear una variable que contega toda la informacion que recibo
        const allMarca = await Marca.find().populate("pienso");
        return res.status(200).json(allMarca);
    } catch (error) {
        return res.status(500).json(error);
        
    }
}
const postMarca = async(req, res) => {
 //POST PARA CREAR
   
    try { const newMarca = new Marca(req.body);
        //el metodo save para guardar el elemento en la BBDD
        const createMarca = await newMarca.save()
        return res.status(201).json(createMarca)

    } catch (error) {
        return res.status(500).json(error)
    }
}
const putMarca = async(req, res) => {
//Put para modificar
    try {
        //recogido nuestro parametro de nuesta url para luego acatarlo y modificarlo
        const{id} = req.params;
        // le hemos mandado al omdelo a validar lo que le estamos pasando
        const putMarca = new Marca(req.body);
        //como el campo id en mono en _id se lo actualiazamos por id para mandaselo luego a actualizar
        putMarca._id=id
        //le mandamos el id para que sepa cual es la que tiene que modificar, el cuerpo ya validado con ese modelo
        const updatedStdio = await Marca.findByIdAndUpdate(id, putMarca, {new:true} );
        //si alguien escribre un caracter mal de la Longitus que nuestro id no dara un fallo
        if(!updatedMarca){
            return res.status(404).json({message:"no tenemos esta marca con ee ID"})
        }
        return res.status(200).json(updatedMarca)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
const deleteMarca =async(req, res) =>{
    try {
    const {id} = req.params;
    const deleteMarca = await Marca.findByIdAndDelete(id);
    return res.status(200).json(deleteMarca)    

    }catch (error) {
        return  res.status(500).json(error)
    }
}
module.exports = {getMarca,postMarca,putMarca,deleteMarca}