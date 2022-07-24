import React, { useState } from "react";
import SelectList from "../SelectList/SelectList";

export default function Form(){
//si tengo los temperamentos en algun estado de redux puedo llamarloa con useSelector
//abajo en el form renderizo un select y dentro se mapea el estado

//el estado local es un obj que se envia al servidor que lo transforma en json
  const[dog, setDog] = useState({
    breed:'',
    min_weight:'',
    max_weight:'',
    min_height:'',
    max_height:'',
    life_span:'',
    temperaments:[]
    })

    const [disabledButton, setdisabledButton] =useState(true)

    //El form Se completa o modifica--> se envia al back
    let handleChange = (e)=>{
      e.preventDefault();

      
      //setInput((prev) =>({...prev, [e.target.name]:e.target.value}))
    }
    let handleTemperamets = (e)=>{
    };

    let handleSubmit = (e)=>{ //le digo que reciba el evento
		e.preventDefault(); //quiero que me guarde la info
	  }

    let validate = (datos)=>{
    };
  
    return(
      <React.Fragment>
     
      {/* <div>
      <div><h1>AQUI PUEDES CREAR UN PERRO</h1></div>
      <hr/>
      <div>Create Dog</div>
      <br/>
      
      <form onSubmit = {e =>handleSubmit(e)}> */}  {/* debo crear una fn para el handleSubmit */}
       {/* <div>
            <label>Breed</label>
            <input 
            type={'text'} 
            name= {'breed'} 
            value={input.breed} 
            placeholder='Dogs Breed'
            onChange={handleChange} />
        </div>
        <div>
            <label>Weight</label> 
        </div>
        <div>
            <label>Min </label>
            <input 
            type={'text'} 
            name= {'min_weight'} 
            value={input.min_weight} 
            placeholder='Min'
            onChange={handleChange} />
        </div>
        <div>
            <label>Max </label>
            <input 
            type={'text'} 
            name= {'max_weight'} 
            value={input.max_weight}
            placeholder='Max' 
            onChange={handleChange} />
        </div>
        <div>
            <label>Height</label>
        </div>
        <div>
            <label>Min</label>
            <input 
            type={'text'}  
            name= {'min_height'} 
            value={input.min_height} 
            onChange={handleChange} />
        </div>
        <div>
            <label>Max</label>
            <input 
            type={'text'} 
            name= {'max_height'} 
            value={input.max_height} 
            onChange={handleChange} />
        </div>
        <div>
            <label>Life Span</label>
            <input 
            type={'text'} 
            name= {'life_span'} 
            value={input.life_span} 
            onChange={handleChange} />
        </div>
        <div>
            <label>Temperament</label>
            <select 
              name= "temperaments" 
              id="">
              <option 
              value={dog.temperaments} 
              onChange={handleTemperamets}>Select a Temperament</option>
            </select>
        </div>
        <input 
        type= {'submit'} 
        value = {'CREATE DOG'}/> */} {/* quiero que cuando de clic en esto haga submit, debo pasar esa funcion al form con onsubmit handleSubmit */}
  
    {/*   </form>
    </div>  */}
      </React.Fragment>
    )
}


