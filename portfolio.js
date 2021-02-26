import React, { Component } from "react";
import "../portfolio.css";
import A from "../1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import B from "../2.jpg";
import C from "../3.jpg";

class Portfolio extends Component {
  render() {
    return (
        
      <section>
          <h1>Portfolio</h1>
        <div class="card">
          <div class="box">
            <div class="imgBx">
              <img src= {A} alt=""/></div>
              <div class="contentBx"></div>
              <h2>Netflix-clone</h2>
              <p>Netflix-Clone</p>
            </div>
          </div>
        
      </section>
    );
  }
}

export default Portfolio;
