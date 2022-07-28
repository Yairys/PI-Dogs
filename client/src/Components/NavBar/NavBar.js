import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar(){
  return (
    <React.Fragment>

    <nav>
      <ul>
        <li>
          <NavLink className="navLink" activeClassName='selected' exact to={"/dogs"}>Home</NavLink>
        </li>
        <li>
          <NavLink className="navLink" activeClassName='selected' exact to={"/create"}>Create Dog</NavLink>
        </li>
        
        {/* <li>
          <NavLink className="navLink" activeClassName='selected' exact to={"/dogs/game"}>Let's Play</NavLink>
        </li> */}
            </ul>

        
            
        </nav>

        </React.Fragment>
    )
}