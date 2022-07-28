import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'

import { useEffect } from 'react';
import {
  getTemps, 
  filterByTemperament, 
  filterCreated,
  orderByName,
  orderByWeight} from '../../Redux/Actions'


export default function FiltersBar (){
  const[order, setOrder]=useState('')

  const temperaments = useSelector((state) => state.temperaments);
   
  const dispatch = useDispatch()
  useEffect(() => {
  
    dispatch(getTemps());
  }, [dispatch]);

  function handleFilterTemperament(e) {
    dispatch(filterByTemperament(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    //setCurrentPage(1);
    setOrder(`Ordenado${e.target.value}`)
  }
  function handleSortByWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value))
   
    setOrder(`Ordenado${e.target.value}`)
  }

  return(
    <div>
      
      <select onChange={e =>handleSort(e)}>
        <option value= 'asc'>A to Z</option>
        <option value= 'desc'>Z to A</option>
      </select>
      <label>Weight</label>
      <select onChange={e =>handleSortByWeight(e)}>
        <option value= 'higher'>High to low</option>
        <option value= 'lower'>Low to High</option>
      </select>
      <label>Temperament</label>
      
      <select onChange={e =>handleFilterTemperament(e)}>
        <option value='all'>Temperaments</option>
      {temperaments.map((temp) => (
<option value={temp.name} key={temp.id}>{temp.name}</option>))}
      </select>
        
     
      <select on onChange={e=>handleFilterCreated(e)}>
        <option value= 'all'>All</option>
        <option value= 'api'>Api</option>
        <option value= 'db'>DB</option>
      </select>
    


    </div>

   

       
)}

