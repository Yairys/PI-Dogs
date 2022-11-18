const initialState = {
    dogs : [],
    allDogs:[],
    detail:[],
    activeFilters:[],
    temperaments :[]

}

export default function rootReducer(state= initialState, action){   
  switch(action.type){   
    case 'GET_DOGS':
      return{
          ...state,
          dogs: action.payload,// spread, me hago una copia del estado previo 
          allDogs: action.payload
        }  
    case 'GET_TEMPS':
      return{
        ...state,
        temperaments: action.payload
                
        }  

    case 'FILTER_BY_TEMPS':
      let allDogs = state.allDogs
      const stateFilter = action.payload === 'all' ? allDogs : 
      allDogs.filter(dog => {if(typeof(dog.temperament)==='string')return dog.temperament.includes(action.payload)})
      return{
        ...state,
        dogs: stateFilter

        } 
         
      case 'FILTER_CREATED':
        let dogs= state.dogs
        const createdFilter = action.payload ==='db' ? state.allDogs.filter(e=>e.create) : state.allDogs.filter(e=>!e.create)
        if(createdFilter.length ===0){
          alert('Ops... Nothing there')
          return{
            ...state,
            dogs:dogs
          }
        }else{

          return{
            ...state, 
            dogs: action.payload === 'all' ? state.allDogs : createdFilter
  
          }
        }

      case 'ORDER_BY_NAME':

        let sortedArr = action.payload === 'asc' ? state.dogs.sort(function(a,b){
          if(a.name > b.name){
            return 1;
          }
          if(b.name >a.name){
            return -1
          }
          return 0;
        }):
        state.dogs.sort(function(a,b){
          if (a.name> b.name){
            return -1
          }
          if(b.name >a.name){
            return 1;
          }
          return 0;
        })
      return {
        ...state,
        dogs: action.payload=== 'all' ? state.allDogs: sortedArr.map(e=>e)
      }
      
      case 'ORDER_BY_WEIGHT':

        let sortedWeight = action.payload === 'higher' ?  state.dogs.sort(function(a,b){
          let aMin= a.min_weight
          let aMax= a.max_weight
          let bMin= b.min_weight
          let bMax= b.max_weight
          if(parseInt(aMax) < parseInt(bMax)) return 1 
          else if(parseInt(aMax) > parseInt(bMax)) return -1
          else{
            if (parseInt(aMin) < parseInt(bMin)) return 1
            else if(parseInt(aMin)> parseInt(bMin)) return -1
            else return 0
          }
        }): state.dogs.sort(function(a,b){
          let aMin= a.min_weight
          let aMax= a.max_weight
          let bMin= b.min_weight
          let bMax= b.max_weight
          
          if(parseInt(aMin) > parseInt(bMin)) return 1 
          else if(parseInt(aMin) < parseInt(bMin)) return -1
          else{
            if (parseInt(aMax) > parseInt(bMax)) return 1
            else if(parseInt(aMax)< parseInt(bMax)) return -1
            else return 0
          }
        })
  
        return{
          ...state,
          dogs: sortedWeight.map(e=>e)
        }


      case 'GET_DETAIL':
        return{
          ...state,
          detail: action.payload
        }

      case 'GET_NAME':

      if(typeof(action.payload)==='string'){
        return alert("Dog's Breed Not Found");
      }
        return{
          ...state,
          dogs: action.payload
        } 
      case 'CREATE_DOG':
        return{
          ...state
        } 
      case 'CLEAN_DETAIL':
        return{
          ...state,
          detail: action.payload
        }
       
        
      default: return {...state}   
            
     }


} 


 



