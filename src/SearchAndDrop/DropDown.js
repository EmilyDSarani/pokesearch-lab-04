import React, { Component } from 'react'
//This will be like the dropdown component in the creature lab, only it needs to allow the user to sort by asc or desc
//It might be separate ot it might be apart of the PokeSearch. That is to be decided. I might set it up using props
//if I set this up using props, then I need to

//you would want to hard code the data in. There will be multiple dropdowns.
//options.map map through them. 
//the options themselves will be hardcoding
export default class DropDown extends Component {
    render() {
        
        return (
        <select onChange={this.props.handleSort}> 

            <option value = "asc"> A-Z</option>
            <option value = "desc">Z-A</option>
        
        </select>
                      
        )
    }
}
