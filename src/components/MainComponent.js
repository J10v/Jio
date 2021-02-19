import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import Home from './Home';
import Nav from './navbar.js';
import { CAMPSITES } from '../shared/campsites';
import Footer from './Footer';
import Portfolio from './portfolio'
import AboutMe from './AboutMe';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        return (
            <div>
                
                <Navbar dark color="light">
                    <div>
                        <NavbarBrand href="/">Jiovanni</NavbarBrand>
                    </div>
                    <div>
                        
                       
                    </div>
                    <Nav/>
                </Navbar>
                <Home/>
                <AboutMe/>
                <Portfolio/>
                <Footer/>
               
                
            </div>
        );
    };
}

export default Main;