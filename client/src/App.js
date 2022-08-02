import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import CreateDog from './Components/CreateDog/CreateDog'
import DogDetail from './Components/DogDetail/DogDetail'; 
import Send from './Components/Send/Send';
import Error404 from './Components/Error404/Error404' 



function App() {
  return (
    <>
  <Router>
    <Switch>
   {/*  <Route path="/:any" component={NavBar} /> */}
   {/*  <Route exact path="/:any" component={FiltersBar} /> */}
    <Route exact path='/' component = {Landing}/>        
    <Route exact path='/dogs' component = {Home}/>        
    <Route exact path= '/dogs/:id' component = {DogDetail}/>  
    <Route exact path='/create' component = {CreateDog}/>   
    <Route exact path='/create/send' component ={Send}/>   
    <Route path= '*' component = {Error404}/>  
    </Switch>

  </Router>
  </>
  );
}   

export default App;
