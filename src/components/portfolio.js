import React, { Component } from 'react';
import '../App.css';
import A from '../1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import B from '../2.jpg';
import C from '../3.jpg';

class Portfolio extends Component {
    render () {
        return (
            <div > 
                <h1>
                    Portfolio
                </h1>
                <hr />
                <div className="col-sm-4 text-center"></div>
                <img src={A} alt="" className="photoo" />
                <img src={B} alt="" className="photoo" />
                <img src={C} alt="" className="photoo" />
               
            </div>
        );
    }
}

export default Portfolio;