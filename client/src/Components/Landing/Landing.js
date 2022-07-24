import React from "react";
import { Link } from "react-router-dom";
//import './landing.css'

export default function Landing(){
    return (

        <div className="landing">
            <div>
                <h1>DOGS APP</h1>
            </div>
            <img/>
            <Link to='/dogs'>
                <button> LETS GO! </button>
            </Link>

        </div>
    )
}