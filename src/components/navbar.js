import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dropdown from 'react-bootstrap/Dropdown'

class Nav extends Component {
  render() {
    return (
      
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Portfolio</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Contact</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      
    );
  }
}

export default Nav;
