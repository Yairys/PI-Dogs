import axios from 'axios'


export const GET_DOGS = 'GET_DOGS'
export const GET_TEMP = 'GET_TEMPS'
export const FILTER_BY_TEMPS = 'FILTER_BY_TEMPS'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'
export const GET_DETAIL = 'GET_DETAIL'
export const GET_NAME = 'GET_NAME' 
export const CLEAN_DETAIL = 'CLEAN_DETAIL'




export function getDogs(){
    return async function(dispatch){
        try{
          let json = await axios.get( 'http://localhost:3001/dogs')
          return dispatch({
              type: 'GET_DOGS',
              payload: json.data
          })
        }catch(error){
          console.log(error)
        } 
    }
} 

export function getTemps(){
    return async function(dispatch){
      try{
        let json = await axios.get( 'http://localhost:3001/temperaments')
        return dispatch({
            type: 'GET_TEMPS',
            payload: json.data    
        })  
      }catch(error){
        console.log(error)
    }}
} 

export function getDetail(id){
  return async function(dispatch){
    try{
      let json= await axios.get('http://localhost:3001/dogs/' + id)
      console.log(json)
      return dispatch({
        type: 'GET_DETAIL',
        payload: json.data    
        })  
        }catch(error){
            console.log(error)
        }
      }
    } 

export function getNameDog(name){
  return async function(dispatch){
    try{
      let json= await axios.get(`http://localhost:3001/dogs?name=${name}`)
      return dispatch({
        type: 'GET_NAME',
        payload: json.data
      })
    }catch(error){
      console.log(error)

    }
  }
}

export function createDog(payload){
  return async function(dispatch){
    try{
      let response = await axios.post("http://localhost:3001/create", payload)
      return response
    }catch(error){
      console.log(error)
      return (error)
    
    }   
  } 
  }

export function filterByTemperament(payload){
    return{
        type:'FILTER_BY_TEMPS',
        payload
    }
}

export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }

}
export function orderByWeight(payload){
    return{
        type: 'ORDER_BY_WEIGHT',
        payload
    }

}

export function cleanDetail(payload){
  
  return{
    type: 'CLEAN_DETAIL',
    payload

  }
}




    






