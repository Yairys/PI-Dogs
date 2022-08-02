const router = require("express").Router();
const { Dog,Temperament } = require('../db');



//temperamentos
router.get('/', async (req, res) => {

    try{
        const dbTemp = await Temperament.findAll();
        res.json(dbTemp)
    }catch(err){
        res.json(err)
    }
    
    
});

 module.exports = router;