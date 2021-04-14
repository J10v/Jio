import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";
import "bootstrap-social/bootstrap-social.css";
function Contact() {
  return (
    <div className="contact-section">
      <div className="col-6 col-sm-3 text-center">
        <h1 class="title">Contact</h1>
        <hr />
      </div>
      <div className="container">
        <br />
        <FaEnvelope href="jiovanni@gmail.com" className="envelope" />{" "}
<div>
          <a href="jiovanni554@gmail.com"> Jiovanni554@gmail.com</a>
         
        </div>
        <FaLinkedinIn className="envelope" /> 

        <FaGithub className="envelope" />

        
      </div>
    </div>
  );
}

export default Contact;
