import React from "react";
import './Error404.css'
import { Link } from "react-router-dom";



export default function Error404(){
    return (     
  <div className='cont404' >
 
    <div className="volver">  
            <Link to={"/dogs"}>
              <button className="vlvr">BACK TO HOME</button>
              </Link></div>      
  
 </div>
  
          
      )
  }