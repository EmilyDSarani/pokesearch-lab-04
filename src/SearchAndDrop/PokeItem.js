import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class PokeItem extends Component {
    render() {
        return (
            <div className ='allpoke'>
                <Link to={`pokedex/${this.props._id}`}>
                <ul> 
                      
                <p><img className= 'pokemon'src={this.props.url_image} alt='a pokemon has appeared'/> <br/></p>
                 <p className='pokename'>Pokemon: {this.props.pokemon} <br/></p>
                  <p className='pokename'> Type 1: {this.props.type_1} <br/> </p>
                  
                </ul>
                </Link>
            </div>
        )
    }
}
