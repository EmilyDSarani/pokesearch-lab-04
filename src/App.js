import React, { Component } from "react";
import Home from "./Home.js";
import PokeDetails from "./PokeDetails.js"
import PokeDex from "./PokeDex.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

//This page is essentially going to be the links page. This needs to be set up and working because it is going to set the tone for the other pages
//Another thing that is needed for this page is that the lab asks for NavLinks that are ActiveStyle. 
export default class App extends Component{
  render() {
    return (

      <>
      
  <Router>
    <header>
    <NavLink exact activeClassName= 'active' to='/'>Home </NavLink>
    <NavLink exact activeClassName= 'active' to='/pokedex'>Pokedex </NavLink>
</header>
    <Switch>
      <Route 
      path="/"
      exact
      render={(routerProps) => <Home {...routerProps}/>}
       />
     
      <Route 
      path="/pokedex"
      exact
      render={(routerProps) => <PokeDex {...routerProps}/>}
       />
  
      <Route
      path="/pokedex/:pokemonName"
      exact
      render={(routerProps) => <PokeDetails {...routerProps}/>}
       />
      

    </Switch>
  </Router>
  </>
)
}
}