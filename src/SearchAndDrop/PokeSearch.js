import React, { Component } from 'react';
import pokelist from '../data.js';
import DropDown from './DropDown.js';
import request from 'superagent'
//I think the superagent gets imported here. 
// will also need to install super agent this will be an import as well. It might...go on a different page
// just in case- import request from 'superagent' which is installed by npm i superagent
//This page will need to do a lot of different things...I am unsure if all the code really needs to go here or if it could be broken up into props and state
//for now, it will be coded here and if it is functioning then it will get cleaned up later.

//will need to establish state, turney, fetch, search bar, search button, 
//handleSubmit, handleChange, fetchSearch, 
//this.setState
//states: poke:[] searchQueary:'', isLoading:false, 

//since I will be handling state in this one, I also need the DropDown to be called here. 


export default class PokeSearch extends Component {
    state={
        
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
