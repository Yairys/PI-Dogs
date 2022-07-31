import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDog } from "../../Redux/Actions";
import './SearchBar.css'

export default function SearchBar(){
const dispatch = useDispatch()
const [name, setName] = useState("")

function handleInputChange(e){
  e.preventDefault()
  setName(e.target.value)

}
function handleSubmit(e){
  e.preventDefault()
  
    if(name !== ""){
    dispatch(getNameDog(name));
    setName("");}
    else{
    alert("Ingresa un nombre para buscar")
    }

}

return(
  
 
    <form className="searchForm" onSubmit={handleSubmit}>
     
      <input className="searchInput"
        type="text"
        placeholder="Search a Dog"
        value={name}
        onChange={handleInputChange}
      />
      {/* <input type="submit" value="Buscar" /> */}
      
    </form>
   
  );
  

}