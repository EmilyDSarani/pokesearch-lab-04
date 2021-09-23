import React, { Component } from 'react';
import pokedex from '../data.js';
import DropDown from './DropDown.js';
import request from 'superagent'
import Spinner from '../HeadAndInstruction/Spinner.js';
import PokeList from './PokeList.js';
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
    //this is setting the state for the search engin, the pokedex, and the loading screen
    state={
        pokedex:[],
        searchQueary:'',
        isLoading: false,

    }
    //the componentDidMount is the life-cycle method. According to my notes, this method is called at a certain moment in the component's life. Which here, we are calling it right before it is born...?
    //this is so the component will do the thing we need it to do upon loading it in.
    //we make it async so that...fetch can grab it. I asked Dani
    compenentDidMount = async () =>{
       await this.fetchSearch();

    }
    //This is like what we did in the creature lab. The handle Change is going to set the state for that current state 
    //later this can be used by the user to help target whatever they are looking for......
    handleChange=(e)=>{
        this.setState({searchQueary: e.target.value})
    }
    //we also set this to async because...we don't know when the user is going to press submit?
    //so...this needs to be flexiable so that whenever the user types in their thing and hit submit it comes back with that thing?
    handleSubmit= async(e) =>{
        e.preventDefault();
        //this.setState({searchQueary: e.target.value});
        await this.fetchSearch();
        console.log(this.state.searchQueary)
    }
    //Im...still not exactly what fetch does. Is it...grabbing whatever the user specically searches for upon load to filter through all of those items? Maybe not filter... 
    

    fetchSearch = async() =>{
        this.setState({isLoading:true})
        const pokeball = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchQueary}`);
        this.setState({pokedex: pokeball.body.results, isLoading:false})  //I made a note that you can put a lot of states in one setState...so I assume one needs to go here
    }
    render() {
        console.log(this.state.pokedex)
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} />
                    <button>Who's That Pokemon??</button>
                </form>
                {/* if this state, else this, else this*/}
                <ul>
                  
                {
                    this.state.pokedex.isLoading
                    ?  <Spinner />
                    : <PokeList pokemon ={this.state.pokedex} />
                }
                
                </ul>
                <DropDown />
            </div>
        )
    }
}
