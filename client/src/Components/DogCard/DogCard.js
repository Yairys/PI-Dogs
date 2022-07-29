import React from "react";
import { Link } from "react-router-dom";
import './DogCard.css'

export default function DogCard({name, image, temperament, min_weight, max_weight, id}){

  
  return (
    <Link to= {`/dogs/${id}`}>
      <div className='container'>
        <h4>Dog Breed: {name}</h4>
        <div className="divfoto">
          <img className= 'dogPhoto' src={image} alt= ""  width="400px"  height="" />
        </div>
        <div> 
          <p>Temperament: {temperament}</p>
        </div>
        <div> 
          <p>Weight: {`${min_weight} - ${max_weight} Kg`}  </p>
        </div>
      </div>
      </Link>
    )
}

