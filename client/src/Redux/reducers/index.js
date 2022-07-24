

const initialState = {
    dogs : [],
    detail:[],
    dogsBackUp:[],
    activeFilters:[]

}

export default function rootReducer(state= initialState, action){   
    switch(action.type){   
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload// spread, me hago una copia del estado previo 
            }  
            default: return {...state}   
        }
} 


 



