import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './SearchAndDrop/PokeItem'
//On this page, it needs to be able to render to a specific pokemon.
//for this page, we need to think of it in terms of 'user story'
//how do we know what they clicked on, how do we direct them to this page, once on this page how do we know what to show and how do we get those details?
// https://pokedex-alchemy.herokuapp.com/api/pokedex/ (pokemon's Id) will be used here
//the code we will need here is this.props.match.params.pokemonName (this was something that Dani said to write down and memorize)
//Will need to have a state, probably something like pokemon:[]
//compoenentDidMouth = async () => { put the link here?}  double check what this does exactly and why
// Then, we need to link this to the pokemon themselves
export default class PokeDetails extends Component {
    state={
        poke:{}
    }
    componentDidMount = async () =>{
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
       //console.log(response.body)
        this.setState({poke:response.body})
    }

    render() {
        return (
            <div>
                
                <h1>Pokemon Stats for {this.props.match.params.pokemon}</h1>
               <PokeItem  url_image = {this.state.poke.url_image}
                        pokemon = {this.state.poke.pokemon}
                        type_1 = {this.state.poke.type_1}  />
            </div>
        )
    }
}
