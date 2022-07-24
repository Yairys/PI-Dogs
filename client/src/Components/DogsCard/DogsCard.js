import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getDogs} from '../../Redux/Actions'
import DogCard from "../DogCard/DogCard";
import { Link } from "react-router-dom";



 const DogsCard= (props)=>{

  const dispatch = useDispatch()
  const allDogs = useSelector((state)=> state.dogs)
  //const loading = useSelector((state) =state.loading)
  const [page, setPage] = useState(1)
  
  let dogsOnPage = 8
  let pagesRequired = Math.ceil(allDogs.length / 8)
  let pages = []

  for (let i =1; i<= pagesRequired; i++){
    pages.push(i)
  }
  const inPage = function(index){
    let begin = (page -1) * dogsOnPage
    let end = page * dogsOnPage;
    if(index < end && index >= begin){return true}
    return false

  }
   useEffect(()=>{
      dispatch(getDogs())
  },[dispatch])  
  
  useEffect(()=>{
    setPage(1)
},[allDogs])    


   function handleClick(e){
      e.preventDefault()
      dispatch(getDogs())

  } 
  return (
    <React.Fragment>
    <div>
    <div>
      <p className='pageTitle'>Page</p>
        {
        pages.map((p) => {
        let disabled = false
        if (p === page) {
        disabled = true}
        return (<button
        key={p}
        disabled={disabled}
        onClick={() => setPage(p)}>{p}
        </button>)
                    })
                }
            </div>

    <div>
      { <button  onClick={e=>{handleClick(e)}} >Reset </button>}   
      </div>
      {allDogs?.map((dog,i)=>{
        if(inPage(i)){
          return (
						<Link to= {`/detail/${dog.id}`}>
							<DogCard 
              key= {dog.id} 
              id= {dog.id} 
              name= {dog.name} 
              image= {dog.img} 
              temperament={dog.temperament} 
              weight= {dog.weight}/> 
					</Link>
					)
        }
      }     
      )}  
      </div>
     

      </React.Fragment>
  )
}
export default DogsCard
