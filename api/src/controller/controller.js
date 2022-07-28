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
                    max_weight: dog.weight.metric.split(" - ")[1] && dog.weight.metric.split(" - ")[1],
                    min_weight: dog.weight.metric.split(" - ")[0] !== "NaN"
                    ? dog.weight.metric.split(" - ")[0] : 6,
                    max_height: dog.height.metric.split(" - ")[1] && dog.height.metric.split(" - ")[1],
                    min_height: dog.height.metric.split(" - ")[0] && dog.height.metric.split(" - ")[0],
                    max_lifeSpan: dog.life_span.split(" - ")[1] && dog.life_span.split(" - ")[1].split(" ")[0],
                    min_lifeSpan: dog.life_span.split(" - ")[0] && dog.life_span.split(" - ")[0],
                    image: dog.image.url,
                    create: false
                };
                return obj;
            })
            const dbDogs = await Dog.findAll({include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: []
                }}})
            let dbDogsNew=dbDogs.map(e =>{
                obj={
                    id: e.id,
                    name: e.name[0].toUpperCase().concat((e.name.slice(1)).toLowerCase()),
                    max_weight: e.max_weight,
                    min_weight: e.min_weight,
                    min_height: e.min_height,
                    max_height: e.max_height,
                    image: e.image ,
                    temperament: e.Temperaments?.map(e => e.name).join(', '),
                    max_lifeSpan: e.max_lifeSpan,
                    min_lifeSpan: e.min_lifeSpan,
                    create: e.create
                }
                return obj
                })  
            const allDogs= [...apiDogs, ...dbDogsNew]
            return allDogs
            
            }
                      

const preCharge= async ()=>{
    let dataApi = await axios.get('https://api.thedogapi.com/v1/breeds');
              const mapTemperaments = dataApi.data.map(e=>e.temperament) // obtengo solo temperamento 
              let temperaments= mapTemperaments.join().split(',') // join une todos los temp y split lo separa por comas
              temperaments = temperaments.map(t=>t.trim()) // trim elimina los espacios en los extremos
              let filtered = temperaments.filter((e, i) => temperaments.indexOf(e) === i)
              filtered=filtered.filter(e=>e !== "")



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