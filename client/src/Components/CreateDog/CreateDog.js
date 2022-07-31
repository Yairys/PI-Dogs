import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {validate} from './validate'
import { getTemps,getDogs } from '../../Redux/Actions';
import{createDog} from '../../Redux/Actions'



export default function CreateDog(){


  const dogs= useSelector((state)=>state.dogs)


  
 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDogs());
  
    dispatch(getTemps());
  }, [dispatch]);  

    
    const temperaments = useSelector((state)=> state.temperaments)
    const [errorButton, setErrorButton] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const [input, setInput] = useState({
      name:'',
      min_weight:'',
      max_weight:'',
      min_height:'',
      max_height:'',
      min_lifeSpan:'',
      max_lifeSpan:'',
      image:'', 
      temperament: []
      
      }) 

    function handleChange(e){
        setInput({
        ...input,
        [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        })
        );

        if(errors.length!==0){ 
          setErrorButton(true)
        }else{
          setErrorButton(false);
        }        
        
    }

    let handleSelect = (e)=>{
      setInput({
        ...input,
        temperament: [...new Set([...input.temperament, e.target.value])]   
    })

    }


     function handleDelete(el){
        setInput({
            ...input,
            temperament: input.temperament.filter(e=> e !== el)
        })
    } 


    function handleSubmit(e){
        e.preventDefault()


        const duplicated = dogs.filter(e=>e.name.toLowerCase()=== input.name.toLowerCase()) 
        console.log(duplicated)
        console.log(dogs)
        if(duplicated.length){ return alert ('This Dogs Breed Already Exists')}else{
          
        }

        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
        }))
        

        if(Object.keys(errors).length===0){ 
          alert('Enviando formulario')
        }else{
          return;
        }
    setLoading(true)
    dispatch(createDog(input))   
        
        
            
  }
          
    return(
      <div>
        <h2>Your dog's breed isn't listed?... You can include it here</h2>
        <form onSubmit = {handleSubmit}> 
          <div>
          <label>Breed:</label> 
            <input 
            autoComplete="off"
            //className={errors && 'danger'}
            type={'text'} 
            name= {'name'} 
            value={input.name} 
            placeholder="Type the Dog's Breed"
            onChange={handleChange} 
            required={true} 
            />
          {errors.name?  (<span>{errors.name}</span>): (false)}  
            </div>


            <div>
              <label>Weight:</label> 
          </div>
          <div>
          <input 
          //className={errors && 'danger'}
          type={'number'} 
          name= {'min_weight'} 
          value={input.min_weight} 
          placeholder={'Min'} 
          onChange={handleChange} 
          required={true} />
          {errors.min_weight?  (<span>{errors.min_weight}</span>): (false)}
          </div>
          
          <div>
          <input 
          //className={errors && 'danger'}
          type={'number'} 
          name= {'max_weight'} 
          value={input.max_weight} 
          placeholder={'Max'} 
          onChange={handleChange} 
         required={true}  />
           {errors.max_weight?  (<span>{errors.max_weight}</span>): (false)}
          </div>
          <div>
              <label>Height:</label>
          </div>
          <div>
          <input 
          //className={errors && 'danger'}
          type={'number'} 
          name= {'min_height'} 
          value={input.min_height} 
          placeholder={'Min'}
          onChange={handleChange} 
          required={true}  />
           {errors.min_height?  (<span>{errors.min_height}</span>): (false)}
          </div>
          <div>
          <input 
          //className={errors && 'danger'}
          type={'number'} 
          name= {'max_height'} 
          value={input.max_height} 
          placeholder={'Max'}
          onChange={handleChange} 
          required={true}  />
           {errors.max_height?  (<span>{errors.max_height}</span>): (false)}
          </div>
          <div>
          <input 
          //className={errors && 'danger'}
          type={'number'} 
          name= {'min_lifeSpan'} 
          value={input.min_lifeSpan} 
          placeholder={'Min'}
          onChange={handleChange} 
           />
          {errors.min_lifeSpan?  (<span>{errors.min_lifeSpan}</span>): (false)}
          </div>
          <div>
          <input 
          //className={errors && 'danger'}
          type={'number'} 
          name= {'max_lifeSpan'} 
          value={input.max_lifeSpan} 

          placeholder={'Min'}
          onChange={handleChange} 
          />
          {errors.max_lifeSpan?  (<span>{errors.max_lifeSpan}</span>): (false)}
          </div>
          <div>
          <label>Image URL: </label>
          <input 
          autoComplete="off" 
          //className={errors && 'danger'}
           type="url"
          name= {'image'} 
          value={input["image"]}
          placeholder={'https://'}
          onChange={handleChange} 
          required={true} 
          />
           {errors.image?  (<span>{errors.image}</span>): (false)}
          </div>


          <div>
            <label>Temperaments </label>
            <select onChange={handleSelect}
            required={true} >
              
              <option value='all'>Temperaments</option>
                {temperaments.map((temp) => (
              <option value={temp.id} key={temp.id}>{temp.name}</option>))}

            </select>
          </div>


            <button
            type="submit"
            /* disabled={errorButton}   */
            >Create
            </button>



		
      </form>

      </div>)
  
                }



