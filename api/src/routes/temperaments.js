const router = require("express").Router();
const { Dog,Temperament } = require('../db');



//temperamentos
router.get('/', async (req, res) => {

    try{
        const dbTemp = await Temperament.findAll();
        console.log(dbTemp)
        res.json(dbTemp)
    }catch(err){
        res.json(err)
    }
    
    
});

 module.exports = router;