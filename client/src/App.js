import React from 'react';
import './App.css';
import { Route, Redirect} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import CreateDog from './Components/CreateDog/CreateDog'

function App() {
  return (
  <React.Fragment>
    <Route path="/:any" component={NavBar} />
    {/* <Route exact path="/:any" component={FiltersBar} /> */}
    <Route exact path='/' component = {Landing}/>        {/* LANDING */}
    {<Route exact path='/dogs' component = {Home}/>}          {/* ALL DOGS */}
    {/* <Route exact path= '/dogs/:id' component = {DogDetail}/> */} {/* DETAIL */}
    <Route exact path='/dogs/create' component = {CreateDog}/>      {/* CREATE */}
    {/* <Route exact path='/dogs/game' component = {DogGame} */}
    {/* <Route path= '*' component = {Error404}/>  */}                {/* ERROR */}


  </React.Fragment>
  );
}   

export default App;
