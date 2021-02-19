import React, { Component } from 'react';
import '../App.css';
import background from '../background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
class Home extends Component {
    render () {
        return (
            <div > 
                <Container>
                    <figure className="position-relative">
                    <img src={background} alt="" className="photo" />
          <figcaption>
              Hello World
          </figcaption>
          <p> My name is Jiovanni Sanchez-Mclaughlin 
             </p>
          
                    </figure>
                </Container>
            
            <style>{'body { background-color: #292b2c; }'}</style> 
            </div>
        );
    }
}

export default Home;