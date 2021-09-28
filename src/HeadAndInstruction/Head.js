import React, { Component } from 'react'

export default class Head extends Component {
    render() {
        return (
            <div >
                <h1 className="header1"> SO YOU WANT TO BE A MASTER?!</h1>
                <img className = "pokedude" src= 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'alt= 'dude holding up pokeball'/>
                <h3 className="header1">Well, before you can train up your pokemon, you should really learn more about them.</h3>
                <h4 className="header1">But First- What is a Pokemon's favorite song? <br/> The Hokey Pokey of course!!</h4>
            </div>
        )
    }
}
