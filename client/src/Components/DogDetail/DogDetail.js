import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/Actions";
import { useEffect } from "react";

export default function DogDetail(props){
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getDetail(props.match.params.id))
  //return()=>(dispatch(cleanDetail()))
},[dispatch])

const currentDog = useSelector((state)=>state.detail)


return(
  <div>
    {
      currentDog?
      <div>

        <h1>Breed: {currentDog.name}</h1>
        <img src= {currentDog.image}/>
        <h3> Weight:</h3>
        <p> {currentDog.min_weight} - {currentDog.max_weight} Kg</p>
        <h3> Height:</h3>
        <p> {currentDog.min_height} - {currentDog.max_height} Cm</p>
        <h3> Life Span:</h3>
        <p> {currentDog.min_lifeSpan} - {currentDog.max_lifeSpan} Years</p>
        
        <h3> Temperament: </h3>
        <p>{currentDog.temperament}</p>
      </div> : <p>Loading...</p>
    
    }
  </div>
)

  }