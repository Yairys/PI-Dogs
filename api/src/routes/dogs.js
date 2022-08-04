const router = require("express").Router();
const axios = require ("axios")
const { Dog, Temperament } = require('../db');
const { Op } = require("sequelize");
const fetch = require("node-fetch")
const {getAllDogs} = require ("../controller/controller")


router.get('/', async (req, res) => {
    const {name} = req.query
    const allDogs = await getAllDogs();
  
  
    try{
        if (name){
        let dogName= await allDogs.filter(e =>e.name.toLowerCase().includes(name.toLowerCase()))
        dogName.length ?  
        res.json(dogName) : res.json("Dog's name not found")
        }else{
            res.json(allDogs)
        }
    }catch(err){
        res.json(err)
    }
    
    
  });


router.get('/:id', async (req, res)=>{
    const { id } = req.params
    const allDogs = await getAllDogs();
    
        try{
            if(id){
                let dogById = allDogs.find((e)=>(e.id==(id))) 
                dogById ? res.json(dogById) : res.json({msg:"ID not found"})
            }else{
                res.send(allDogs)}
        }catch(err){
            res.json(err)
        }
    
})

router.delete('/:id', (req,res)=>{
    const {id} = req.params
    try{
        if(id)
        {Dog.destroy({where : {id : id }})
        res.send('deleted: '+id)}


    }catch(err){
        res.send(err)

    }

})

/* router.put('/:id'),async (req,res)=>{
    const {id} = req.params
    try{
        const updateDog = await Dog.findOne({where:{id:id}})
        await updateDog.update({
            name: req.body.name,
            min_height: req.body.min_height,
            max_height: req.body.max_height,
            max_weight: req.body.max_weight,
            min_weight: req.body.min_weight,
            max_lifeSpan: req.body.max_lifeSpan,
            min_lifeSpan: req.body.min_lifeSpan,
            image: req.body.image,
          })
          
          let tempsDb = await Temperament.findAll({where:{name [Op.in]: req.body.temperament}})
          await updateDog.setTemperaments(tempsDb)
          res.send(actualiado)

    }catch(error){
        res.json(error)
    }
} */
    







module.exports = router;