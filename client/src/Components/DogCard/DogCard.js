import React from "react";

export default function DogCard({name, image, temperament, min_weight, max_weight}){

  
  return (
    <div>
      <div className='container'>
        <h4>Dog Breed: {name}</h4>
        <div>
          <img className= 'dogPhoto' src={image} alt= ""  width="400px"  height="" />
        </div>
        <div> 
          <p>Temperament: {temperament}</p>
        </div>
        <div> 
          <p>Weight: {`${min_weight} - ${max_weight} Kg`}  </p>
        </div>
      </div>
    </div>
    )
}

