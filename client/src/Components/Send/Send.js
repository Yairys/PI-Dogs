import React from "react";
import './Send.css'
import thumb from '../../Assets/creado.png'
import { Link } from "react-router-dom";


export default function Send(){
    return (     
  <div className="contSend" >
    <img alt='' className="imgDog" src={thumb}></img>

    <div className="btnSend">  
            <Link exact to={"/dogs"}>
              <button className="send">BACK TO HOME</button>
              </Link></div>

             

          
  
 </div>
  
          
      )
  }