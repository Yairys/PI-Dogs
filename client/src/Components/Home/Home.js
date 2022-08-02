
import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import DogCards from "../DogCards/DogCards";
import FiltersBar from "../FiltersBar/FiltersBar";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";
import {getDogs} from '../../Redux/Actions'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getDogs())
  },[dispatch])
  
  function handleClick(e){
    e.preventDefault()
    dispatch(getDogs())

} 
    


  return (
    <div className="contGral">

      <div className="navBar">
        <NavBar />
      </div>
      <div className="midBar">
        <div className="filters">
          <FiltersBar />
          </div>


         <div className="resetYSearch">
          <div className="search">
           <SearchBar /> 
          </div>
          <div className="reset">
            {
              <button
                className="rButton"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                <p> Reset Filters </p>
              </button>
            }
          </div>
          </div>
       
        <div className="cardsCont">
          <DogCards />
        </div>
      </div>
    </div>
  );
}
