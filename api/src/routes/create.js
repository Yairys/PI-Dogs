const router = require("express").Router();
const { Dog, Temperament } = require('../db');

//CREAR NUEVO PERRO

router.post('/', async (req, res) => {
    const { name, min_height, max_height, max_weight, min_weight, max_lifeSpan, min_lifeSpan,temperament, image} =req.body  
     
    if(!name|| !min_height || !max_height || !max_weight || !min_weight || !max_lifeSpan || !min_lifeSpan || !temperament ){
        res.send({msg:"missing data"})
    }
    try{
        const newDog = await Dog.create({ name, min_height, max_height, max_weight, min_weight, max_lifeSpan, min_lifeSpan, temperament, image })

        newDog.addTemperament(temperament);
       /*   const aux = Dog.findById(newDog,{
            include: [{ model : Temperament}],
        })   */ 
       res.status(200).json(newDog)

    }catch(err){
        /* .status(404). */
        res.json(err)
        return(err)
    }
    
});

module.exports = router;