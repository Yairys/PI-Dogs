import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getDogs} from '../../Actions'
import Card from '../Card/Card'


export default function Home(){

    const dispatch = useDispatch()
    
   
    const allDogs = useSelector((state)=> state.dogs)
   
    

     useEffect(()=>{
        dispatch(getDogs())
        
    },[])    

    function handleClick(e){
        e.preventDefault()
        dispatch(getDogs())

    }  
    return (
        <React.Fragment>
        <div>

        <div>
            <h1>AQUI VERE TODOS MIS PERROS</h1>
            <button  onClick={e=>{handleClick(e)}} >
                Reset
            </button>
           
        </div>
        {allDogs?.map(e=>{
            <>
            <Card name={e.name} /* image={e.img} */ />
            </>
            console.log(e)
        }
        

            
        )}
            
        </div>

        </React.Fragment>
    )
}