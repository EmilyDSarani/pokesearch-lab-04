import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className ='allpoke'>
                <ul> 
                      
                <p><img className= 'pokemon'src={this.props.url_image} alt='a pokemon has appeared'/> <br/></p>
                 <p className='pokename'>Pokemon: {this.props.pokemon} <br/></p>
                  <p className='pokename'> Type 1: {this.props.type_1} <br/> </p>
                  
                </ul>
                
            </div>
        )
    }
}
