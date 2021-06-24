import React from 'react';
import '../contact_left/style.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Contact_Left() {
  return (
    <div>
           <Row className="Contact-text">
              <Col xl={12}>
              <h1 className="p-heading1">Contact me</h1>
              <p className="p-heading2">
              Hello! <br />
              Thank you for checking my website out, feel free to message me!
              I love meeting new people! You can contact me via the platforms below.
              </p>
              </Col>
           </Row>
          
            <Row className="contact-left-footer" >
              <SocialIcons />
            </Row>
    </div>
  );
}

export default Contact_Left;
