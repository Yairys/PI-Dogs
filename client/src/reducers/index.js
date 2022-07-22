//import { GET_DOGS } from '../Actions'

const initialState = {
    dogs : []
}

export default function rootReducer(state= initialState, action){
    
   
    switch(action.type){
        
        case 'GET_DOGS':
            return{
                ...state,
                dogs: [...state.dogs, {...action.payload}]// spread, me hago una copia del estado previo
                
            }
            
            default: return {...state}
            console.log(action.type)

           
    }
   
} 


 



