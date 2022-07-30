import React from "react";
import DogsCard from '../DogsCard/DogsCard'
import FiltersBar from "../FiltersBar/FiltersBar";
import SearchBar from "../SearchBar/SearchBar";
import './Home.css'


export default function Home(){
  return (
    <div>
      <div>
				<h1>DOGAPEDIA</h1>
			</div>

    <FiltersBar/>
    <SearchBar/>
    <DogsCard/> 
    

		</div> 
    )
}

