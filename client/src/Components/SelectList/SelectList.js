/* import React, { useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getTemps} from '../../Redux/Actions/index'

export default function SelectList() {

  const dispatch = useDispatch()
  const allTemperaments = useSelector((state)=> state.Temps)
   useEffect(()=>{
      dispatch(getTemps())
  },[dispatch])    

  return(
    <div>
      <select name= "temperaments" id="">
        <option>Select a Temperament</option>
      </select>

    </div>
  )
}
 */



 /* export default function DogsCard(){

  

   function handleClick(e){
      e.preventDefault()
      dispatch(getDogs())

  } 
  return (
    <React.Fragment>
    <div>

    <div>
      { <button  onClick={e=>{handleClick(e)}} >Reset </button>}
         
      </div>
      {allDogs?.map(dog=>{
          return (
						<Link to= {`/detail/${dog.id}`}>
					
							<DogCard key= {dog.id} id= {dog.id} name= {dog.name} image= {dog.img} temperament={dog.temperament} weight= {dog.weight}/> 
					</Link>
					)
      }     
      )}
          
      </div>

      </React.Fragment>
  )
} */
