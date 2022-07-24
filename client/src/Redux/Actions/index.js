import axios from 'axios'


export const GET_DOGS = 'GET_DOGS'
//export const GET_TEMP = 'GET_TEMP'

export function getDogs(){
    return async function(dispatch){
        let json = await axios.get( 'http://localhost:3001/dogs')
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
} 


/* export function getTemps(){
    return async function(dispatch){

        let json = await axios.get( 'http://localhost:3001/temperaments')
        return dispatch({
            type: 'GET_TEMP',
            payload: json.data
            
        })
        
    }
    
} 
 */
