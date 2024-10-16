const { Actor } = require("../models");


const getAllActors = async(req,res)=>{
  try{
const actors = await Actor.find()
res.json(actors)
  }catch(error){
    return res.status(500).send(error.message)
  }
}
const findActorDetailById = async (req, res) => {
  const id = req.params.id;
  try {
    let foundActor = await Actor.findById(id);
    res.json(foundActor);
  } catch (error) {
    res.send("Error finding Movie Detail");
  }
};


module.exports = {
    getAllActors,
    findActorDetailById
};
