const axios = require ("axios")
const { Dog, Temperament } = require('../db');
const { Op } = require("sequelize");


const getAllDogs = async()=>{
    

    const resultApi = await axios.get('https://api.thedogapi.com/v1/breeds')
        const apiDogs = resultApi.data.map(dog =>{
                obj={
                    id: dog.id,
                    name: dog.name, 
                    temperament: dog.temperament,
                    weight: dog.weight.metric,
                    height: dog.height.metric,
                    lifeSpan: dog.life_span,
                    img: dog.image.url
                };
                return obj;
            })
            const dbDogs = await Dog.findAll({include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: []
                }}});
            
            const allDogs= [...apiDogs, ...dbDogs]

            return allDogs
            }


const preCharge= async ()=>{
    let dataApi = await axios.get('https://api.thedogapi.com/v1/breeds');
              const mapTemperaments = dataApi.data.map(e=>e.temperament) // obtengo solo temperamento 
              let temperaments= mapTemperaments.join().split(',') // join une todos los temp y split lo separa por comas
              temperaments = temperaments.map(t=>t.trim()) // trim elimina los espacios en los extremos
              const filtered = temperaments.filter((e, i) => temperaments.indexOf(e) === i)
              let modelTemp = filtered.map((e) => {//  nuevo map para 
              return {
                  name: e
                  };
              })  
              
              //crear los apisodios en la db con bulk
  
              Temperament.bulkCreate(modelTemp)}


module.exports = {
    getAllDogs,
    preCharge
  }