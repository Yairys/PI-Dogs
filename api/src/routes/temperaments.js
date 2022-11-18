const router = require("express").Router();
const { Dog,Temperament } = require('../db');
const {preCharge} = require ("../controller/controller")



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