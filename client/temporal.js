async function handleSubmit(e){
  e.preventDefault()
  setErrors(validate(input))
  await axios.post("http://localhost:3001/create", input)
  alert('perro creado')
   
}