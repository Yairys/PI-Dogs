import React from "react";
import DogsCard from '../DogsCard/DogsCard'
import FiltersBar from "../FiltersBar/FiltersBar";
import SearchBar from "../SearchBar/SearchBar";


export default function Home(){
  return (
    <React.Fragment>
      <div>
				<h1>DOGAPEDIA</h1>
			</div>
    <FiltersBar/>
    <SearchBar/>
		<DogsCard/> 
   
    
    
    </React.Fragment>
    )
}

