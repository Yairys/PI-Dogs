import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getDogs} from '../../Redux/Actions'
import DogCard from "../DogCard/DogCard";
import './DogCards.css'

 const DogCards= (props)=>{

  const dispatch = useDispatch()
  const dogs = useSelector((state)=> state.dogs)
  const [page, setPage] = useState(1)
  
  let dogsOnPage = 8
  let pagesRequired = Math.ceil(dogs.length / 8)
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
},[dogs])    

  return (

<div className="contPpal">
    <div className="tarjeta">
        <div className="card">
      {dogs?.map((dog,i)=>{
        if(inPage(i)){
          return (
							<DogCard 
              key= {dog.id} 
              id= {dog.id} 
              name= {dog.name} 
              image= {dog.image} 
              temperament={dog.temperament} 
              min_weight= {dog.min_weight}
              max_weight= {dog.max_weight}/> 
          
					)
        }
      }     
      )} 

      </div> 
      
    <div>
      
        {
        pages.map((p) => {
        let disabled = false
        if (p === page) {
        disabled = true}
        return (<button
        className="pButton"
        key={p}
        disabled={disabled}
        onClick={() => setPage(p)}>{p}
        </button>)
          })
        }
        </div>
      
      </div>
      </div>
  )
}
export default DogCards