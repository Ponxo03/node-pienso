const Perros = require("../models/perros.model")

const getPerros = async (req, res) =>{
    try {
       
        const allPerros = await Perros.find();
        return res.status(200).json(allPerros);
    } catch (error) {
        return res.status(500).json(error);
        
    }
}
const postPerros = async(req, res) => {

   
    try { const newPerros = new Perros(req.body);
       
        const createPerros = await newPerros.save()
        return res.status(201).json(createPerros)

    } catch (error) {
        return res.status(500).json(error)
    }
}
const putPerros = async(req, res) => {

    try {
       
        const{id} = req.params;
       
        const putPerros = new Perros(req.body);
       
        putPerros._id=id
       
        const updatedPerros = await Perros.findByIdAndUpdate(id, putPerros, {new:true} );
        
        if(!updatedPerros){
            return res.status(404).json({message:"no tenemos este pienso de  perros con ese ID"})
        }
        return res.status(200).json(updatedPerros)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
const deletePerros =async(req, res) =>{
    try {
    const {id} = req.params;
    const deletePerros = await Perros.findByIdAndDelete(id);
    return res.status(200).json(deletePerros)    

    }catch (error) {
        return  res.status(500).json(error)
    }
}
module.exports = {getPerros,postPerros,putPerros,deletePerros}