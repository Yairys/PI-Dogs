import React from "react";

export default function CreateDog({create}){

    let [input, setInput] = React.useState({
    breed:'',
    Min_Weight:'',
    Max_Weight:'',
    Min_Height:'',
    Max_Height:'',
    Life_Span:''
    })

    let handleChange = (e)=>{
        e.preventDefault();
            console.log(e);
        
        setInput((prev) =>({...prev, [e.target.name]:e.target.value}))
    }

    let handleSubmit = (e)=>{ //le digo que reciba el evento
		e.preventDefault(); //quiero que me guarde la info
		create(input);	//	dispatch(createUser(input))   // si lo hago con connect aqui solo lo pongo  y asi recibe props
		setInput({
        breed:'',
        Min_Weight:'',
        Max_Weight:'',
        Min_Height:'',
        Max_Height:'',
        Life_Span:''})
        e.target.reset();
		
	}

    return (
        <React.Fragment>

        <div><h1>AQUI PUEDES CREAR UN PERRO</h1></div>
        <hr/>
        <div>Create Dog</div>
        <br/>
        
        <form onSubmit = {e =>handleSubmit(e)}> {/* debo crear una fn para el handleSubmit */}
          <div>
              <label>Breed</label>
              <input type={'text'} name= {'breed'} value={input.breed} onChange={(e)=>handleChange(e)} />
          </div>
          <div>
              <label>Weight</label> 
          </div>
          <div>
              <label>Min </label>
              <input type={'text'} name= {'Min_Weight'} value={input.Min_Weight} onChange={(e)=>handleChange(e)} />
          </div>
          <div>
              <label>Max </label>
              <input type={'text'} name= {'Max_Weight'} value={input.Max_Weight} onChange={(e)=>handleChange(e)} />
          </div>
          <div>
              <label>Height</label>
          </div>
          <div>
              <label>Min</label>
              <input type={'text'}  name= {' Min_Height'} value={input. Min_Height} onChange={(e)=>handleChange(e)} />
          </div>
          <div>
              <label>Max</label>
              <input type={'text'} name= {'Max_Height'} value={input.Max_Height} onChange={(e)=>handleChange(e)} />
          </div>
          <div>
              <label>Life Span</label>
              <input type={'text'} name= {'Life_Span'} value={input.Life_Span} onChange={(e)=>handleChange(e)} />
          </div>
          <input type= {'submit'} value = {'CREATE DOG'}/> {/* quiero que cuando de clic en esto haga submit, debo pasar esa funcion al form con onsubmit handleSubmit */}
		
        </form>

        </React.Fragment>
    )
}


/*
export default connect(null, mapDispatchToProps)(CreateUser) */