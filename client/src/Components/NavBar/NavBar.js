import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import logo from '../../Assets/image/logo.png'

export default function NavBar(){
  return (
    
     
<div className="navBar">
 
    <nav className="nav">
    <div className="logo" ><img alt='' src={logo} /></div>
      
      <ul>
        
      
        <li className="li">
          <NavLink className="navLink" activeClassName='selected' exact to={"/dogs"}>Home</NavLink>
        </li>
        <li className="li">
          <NavLink className="navLink" activeClassName='selected' exact to={"/create"}>Create a Dog</NavLink>
        </li>
        <div className="liEstructura"></div>
        
            </ul>
        </nav>
        </div>
        

        
    )
}