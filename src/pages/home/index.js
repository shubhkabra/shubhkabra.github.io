import React from 'react';
import '../home/style.css';
import HomeComponent from '../../components/home_component';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import {Helmet} from 'react-helmet';



function Home() {
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Shubhankar Kabra</title>
                  <link rel="canonical" href="http://shubhkabra.como/home" />
                  <meta name="description" content="Shubhankar Kabra - Student | Software Engineer | Trader" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={12}  className="App-left">
                <HomeComponent />
              </Col>
              
            </Row>
            <Row className="App-footer">
              
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default Home;
