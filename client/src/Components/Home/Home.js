import React from "react";
import DogCards from '../DogCards/DogCards'
import FiltersBar from "../FiltersBar/FiltersBar";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import './Home.css'
import banner from '../../Assets/image/perros.png'




export default function Home(){
  return (
    

    <div className="contGral">
      
    <div className="navBar">
    <NavBar/>
    </div>
    
    
      <div className="banner">
      <img className='bann' src={banner} alt=""/>
      </div>  
 
      <div className="filters">
      <FiltersBar/>
      </div>

    <div className="cardsCont">
    <DogCards/> 

    </div>

    
    

		
    </div>
    )
}

