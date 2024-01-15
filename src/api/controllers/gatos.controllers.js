const Gatos = require("../models/gatos.model")

const getGatos = async (req, res) =>{
    try {
       
        const allGatos = await Gatos.find();
        return res.status(200).json(allGatos);
    } catch (error) {
        return res.status(500).json(error);
        
    }
}
const postGatos = async(req, res) => {

   
    try { const newGatos = new Gatos(req.body);
       
        const createGatos = await newGatos.save()
        return res.status(201).json(createGatos)

    } catch (error) {
        return res.status(500).json(error)
    }
}
const putGatos = async(req, res) => {

    try {
       
        const{id} = req.params;
       
        const putGatos = new Gatos(req.body);
       
        putGatos._id=id
       
        const updatedGatos = await Gatos.findByIdAndUpdate(id, putGatos, {new:true} );
        
        if(!updatedGatos){
            return res.status(404).json({message:"no tenemos este pienso de gatos con ese ID"})
        }
        return res.status(200).json(updatedGatos)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
const deleteGatos =async(req, res) =>{
    try {
    const {id} = req.params;
    const deleteGatos = await Gatos.findByIdAndDelete(id);
    return res.status(200).json(deleteGatos)    

    }catch (error) {
        return  res.status(500).json(error)
    }
}
module.exports = {getGatos,postGatos,putGatos,deleteGatos}