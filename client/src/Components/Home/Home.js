import React from "react";
import DogsCard from '../DogsCard/DogsCard'
import FiltersBar from "../FiltersBar/FiltersBar";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import './Home.css'
import banner from '../../Assets/image/perros.png'



export default function Home(){
  return (

    <>
    <div className="contenedor">
      </div>
      <NavBar/>

      <div className="header">
      <img className='bann' src={banner} alt=""/>
 
      
      <FiltersBar/>

    

    <DogsCard/> 
    

		</div> 
    </>
    )
}

