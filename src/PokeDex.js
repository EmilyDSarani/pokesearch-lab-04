import React, { Component } from 'react'
import PokeSearch from './SearchAndDrop/PokeSearch.js';
import './App.css';

import Footer from './HeadAndInstruction/Footer.js';
//We want to keep this page clean and render in the different pokemon that will be coming through on the data
//This will be the future landing page when we start doing more of the react router stuff
export default class Home extends Component {
    render() {
        return (
            <div>
        <PokeSearch />
        <Footer />
            </div>
        )
    }
}
