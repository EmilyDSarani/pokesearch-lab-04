import React, { Component } from "react";
import Home from "./Home.js";
import PokeDetails from "./Details/PokeDetails.js"
import PokeDex from ".PokeDex.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router";


export default class App extends Component{
  render() {
    return (

      <>
  <Router>
    <Switch>
      <Route 
      exact 
      path="/"
      render={(routerProps) => <Home {...routerProps}/>}
       />
     
      <Route 
      exact
      path="/pokedex"
      render={(routerProps) => <PokeDex {...routerProps}/>}
       />
  
    
      <Route
      exact
      path="/pokemon/:pokemonName"
      render={(routerProps) => <PokeDetails {...routerProps}/>}
       />
      

    </Switch>
  </Router>
  </>
)
}
}