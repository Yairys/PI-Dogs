/*  function handleDelete(el){
        setInput({
            ...input,
            temperament: input.temperament.filter(e=> e !== el)
        })
    } 
 */

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
  dispatch(createDog(input, history.push('/create/send')))   
      
      
          
}
        
  return(
    <div className='containerCreate'>

      <h2>Your dog's breed isn't listed?... You can include it here</h2>
      <div className='group'>
      <form onSubmit = {handleSubmit}> 
        <div className='breed'>
        <label>Dog's Breed:</label> 
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
        {errors.name?  (<span className='error'>{errors.name}</span>): (false)}  
          </div>

        
          <div>
            <label>Weight:</label> 
        <input className='numInput'
        /* className={errors && 'danger'} */
        type={'text'} 
        name= {'min_weight'} 
        value={input.min_weight} 
        placeholder={'Min'} 
        onChange={handleChange} 
        required={true} />
        
       
       
        <input className='numInput'
        //className={errors && 'danger'}
        type={'text'} 
        name= {'max_weight'} 
        value={input.max_weight} 
        placeholder={'Max'} 
        onChange={handleChange} 
       required={true}  />
       {errors.min_weight?  (<span className='error'>{errors.min_weight}</span>): (false)}
         {errors.max_weight?  (<span className='error2'>{errors.max_weight}</span>): (false)}
        </div>
       

        <div>
            <label>Height:</label>
        <input className='numInput'
        //className={errors && 'danger'}
        type={'text'} 
        name= {'min_height'} 
        value={input.min_height} 
        placeholder={'Min'}
        onChange={handleChange} 
        required={true}  />
         
        
        <input className='numInput'
        //className={errors && 'danger'}
        type={'text'} 
        name= {'max_height'} 
        value={input.max_height} 
        placeholder={'Max'}
        onChange={handleChange} 
        required={true}  />
        {errors.min_height?  (<span className='error'>{errors.min_height}</span>): (false)}
        {errors.max_height?  (<span className='error2'>{errors.max_height}</span>): (false)}
        
        </div>
        
        <div>
        <label>Life Span: </label> 
        <input className='numInput'
        //className={errors && 'danger'}
        type={'text'} 
        name= {'min_lifeSpan'} 
        value={input.min_lifeSpan} 
        placeholder={'Min'}
        onChange={handleChange} 
         />
        {errors.min_lifeSpan?  (<span className='error'>{errors.min_lifeSpan}</span>): (false)}
        
        <input  className='numInput'
        //className={errors && 'danger'}
        type={'text'} 
        name= {'max_lifeSpan'} 
        value={input.max_lifeSpan} 

        placeholder={'Max'}
        onChange={handleChange} 
        />
        {errors.max_lifeSpan?  (<span className='error'>{errors.max_lifeSpan}</span>): (false)}
        
        </div>
        <div>
        
        </div>
        <div>
        <label>Image URL: </label>
        <input 
        autoComplete="off" 
        //className={errors && 'danger'}
        
        name= {'image'} 
        value={input["image"]}
        placeholder={'https://'}
        onChange={handleChange} 
        required={true} 
        />
         {errors.image?  (<span className='error'>{errors.image}</span>): (false)}
        </div>


        <div >
          <label>Temperaments </label>
          <select className='createTemp'
          onChange={handleSelect}
          required={true} >
            
            <option value='all'>Temperaments</option>
              {temperaments.map((temp) => (
            <option value={temp.name} key={temp.id}>{temp.name}</option>))}

          </select>

          <div className='SelectTemp'>
          
          
          
          {input.temperament.map((el) => (
            <button onClick={()=>handleDelete(el)} key={el.id}>{el}  <label>X</label></button>))}

          



          </div>
        </div>
            <div className='botones'>
          <div className='boton'>
          <button className='send'
          type="submit"
          >Create
          </button>
          </div>
          

          <div className="boton">  
          <Link exact to={"/dogs"}>
            <button className="send">BACK TO HOME</button>
            </Link></div>

            </div>



    
    </form>
    </div>

    </div>)

              }



