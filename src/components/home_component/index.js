import React from 'react';
import './style.css';
import SocialIcons from '../social_icons'
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function Home_Component() {
  return (
   <Container className="home-component" >
    <Row className="home-component-main">
       <Col xl={12} className="home-component-main-col">
         <h1 className="first-line">
           Hello! 
         </h1>
         <h2 className="second_line">
           I am <strong>Shubhankar Kabra</strong>
         </h2>
         <h3>
         <ReactTypingEffect
           text="Student | Software Engineer"
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
         <SocialIcons />
           <br />
           <Button variant="outline-light" size="lg" className="home-component-aboutmme-btn"><Link to="./about" style={{ textDecoration: 'none', color: 'white' }} className="home-component-aboutme">About Me</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-component-aboutmme-btn"><Link to="./resume" style={{ textDecoration: 'none', color: 'white' }} className="home-component-aboutme">Resume</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-component-aboutmme-btn"><Link to="./project" style={{ textDecoration: 'none', color: 'white' }} className="home-component-aboutme">Projects</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-component-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-component-aboutme">Contact Me</Link></Button>
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Component;
