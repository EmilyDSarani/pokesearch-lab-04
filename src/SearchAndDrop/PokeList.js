import React, { Component } from 'react'
import PokeItem from './PokeItem'


export default class PokeList extends Component {
    
    render() {
        return (
            
            <>
                
                    {
                        this.props.pokemon.map (poke => <PokeItem 
                        url_image = {poke.url_image}
                        pokemon = {poke.pokemon}
                        type_1 = {poke.type_1} 
                        _id={poke._id}
                        />)
                    }
                
               

            </>
        )
    }
}
