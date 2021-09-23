import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url_image} alt='a pokemon has appeared'/> <br/>
                   Pokemon: {this.props.pokemon} <br/>
                   Type 1: {this.props.type_1} <br/>

            </div>
        )
    }
}
