const Pienso = require("../models/pienso.model")

const getPienso = async (req, res) =>{
    try {
        // me voy a crear una variable que contega toda la informacion que recibo
        const allPienso = await Pienso.find();
        return res.status(200).json(allPienso);
    } catch (error) {
        return res.status(500).json(error);
        
    }
}
const postPienso = async(req, res) => {
 //POST PARA CREAR
   
    try { const newPienso = new Pienso(req.body);
        //el metodo save para guardar el elemento en la BBDD
        const createPienso = await newPienso.save()
        return res.status(201).json(createPienso)

    } catch (error) {
        return res.status(500).json(error)
    }
}
const putPienso = async(req, res) => {
//Put para modificar
    try {
        //recogido nuestro parametro de nuesta url para luego acatarlo y modificarlo
        const{id} = req.params;
        // le hemos mandado al omdelo a validar lo que le estamos pasando
        const putPienso = new Pienso(req.body);
        //como el campo id en mono en _id se lo actualiazamos por id para mandaselo luego a actualizar
        putPienso._id=id
        //le mandamos el id para que sepa cual es la que tiene que modificar, el cuerpo ya validado con ese modelo
        const updatedPienso = await Pienso.findByIdAndUpdate(id, putPienso, {new:true} );
        //si alguien escribre un caracter mal de la Longitus que nuestro id no dara un fallo
        if(!updatedPienso){
            return res.status(404).json({message:"no tenemos esta pienso con ee ID"})
        }
        return res.status(200).json(updatedPienso)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
const deletePienso =async(req, res) =>{
    try {
    const {id} = req.params;
    const deletePienso = await Pienso.findByIdAndDelete(id);
    return res.status(200).json(deletePienso)    

    }catch (error) {
        return  res.status(500).json(error)
    }
}
module.exports = {getPienso,postPienso,putPienso,deletePienso}