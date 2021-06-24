import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';

class About extends Component {
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About Me| Shubhankar Kabra</title>
                <link rel="canonical" href="http://shubhkabra.como/about" />
                <meta name="description" content="Shubhankar Kabra - Student | Software Engineer | Trader" />
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row className="About-main">
              <HamburgerMenu />
              <CV/>
           </Row>
          <Row className="About-footer">
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default About;
