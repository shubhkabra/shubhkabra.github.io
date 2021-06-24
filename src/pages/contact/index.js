import React from 'react';
import '../contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Animate from 'react-smooth';
import HamburgerMenu from '../../components/hamburger_menu';
import ContactLeft from '../../components/contact_left';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import particles from '../../const/contact_particle.js';
import Particles from 'react-particles-js';

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Shubhankar Kabra</title>
                <link rel="canonical" href="http://shubhkabra.como/contact" />
                <meta name="description" content="Shubhankar Kabra - Student | Software Engineer | Trader" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles
            params={particles}
            className="particle"
          />
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
            <HamburgerMenu />
            </Row>
            <Row className="Contact-main">
            <Col  xl={6}  className="Contact-left">
            <ContactLeft />
            </Col>
            </Row>
            <Row className="Contact-footer">
            </Row>
          </Container>
       </Animate>
      </div>
    )
  }
}export default Contact