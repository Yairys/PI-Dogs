import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDog } from "../../Redux/Actions";

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
 
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={name}
        onChange={handleInputChange}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
  

}