import React, { Component } from 'react'
import PokeSearch from './SearchAndDrop/PokeSearch.js';
import './App.css';
import Head from './HeadAndInstruction/Head.js';
import Footer from './HeadAndInstruction/Footer.js';

export default class Home extends Component {
    render() {
        return (
            <div>
         <Head />
        <PokeSearch />
        <Footer />
            </div>
        )
    }
}
