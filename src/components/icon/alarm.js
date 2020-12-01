import React, { Component } from 'react'
import './icon.css'
import logo from '../../assets/images/logo.jpg'
import callAPI from '../../_utils/apiCaller';

class Alarm extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div id='alarm' class='popup'>
            <p>alarm</p>
        </div>
        );
    }
}

export default Alarm;