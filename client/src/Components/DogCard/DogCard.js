import React from "react";

export default function DogCard({name, image, temperament, weight}){

  
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
          <p>Teight: {`${weight} Kg`}  </p>
        </div>
      </div>
    </div>
    )
}

