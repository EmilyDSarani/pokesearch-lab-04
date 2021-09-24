import React, { Component } from 'react'
import Loader from 'react-loader-spinner';


export default class Spinner extends Component {
    //pokeball loading screen found on google, on imgur from anamethatissuperlongandawesome(https://imgur.com/gallery/XLJxE8S/comment/326719083)
    render() {
        return (
            <div>
                {/* Stef Baughman pointed this way for the spinner. Thought it was a cool way to go. It was a thing that was installed */}
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />

            </div>
        )
    }
}
