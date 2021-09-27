import React, { Component } from 'react'
import request from 'superagent'
import PokeList from './SearchAndDrop/PokeList'
//On this page, it needs to be able to render to a specific pokemon.
//for this page, we need to think of it in terms of 'user story'
//how do we know what they clicked on, how do we direct them to this page, once on this page how do we know what to show and how do we get those details?
// https://pokedex-alchemy.herokuapp.com/api/pokedex/ (pokemon's Id) will be used here
//the code we will need here is this.props.match.params.pokemonName (this was something that Dani said to write down and memorize)
//Will need to have a state, probably something like pokemon:[]
//compoenentDidMouth = async () => { put the link here?}  double check what this does exactly and why
// Then, we need to link this to the pokemon themselves
export default class PokeDetails extends Component {
    render() {
        return (
            <div>
               <span>Hi</span> 
            </div>
        )
    }
}
