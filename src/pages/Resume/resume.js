import { Document, Page, pdfjs } from 'react-pdf';
import React, { Component } from 'react';
import GetResume from '../../components/resume_get';
import shubhResume from '../../const/Resume_Shubhankar_Kabra.pdf';
import {
    Container,
    Col,
    Row,
    Button
  } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {Helmet} from 'react-helmet';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';
import Animate from 'react-smooth';
import '../Resume/style.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Project | Shubhankar Kabra</title>
                    <link rel="canonical" href="http://shubhkabra.como/project"/>
                    <meta name="description" content="Shubhankar Kabra | Project - Product Manager | Project Manager | Software Engineer
                    Experienced Project & Product Manager with a demonstrated history of working in computer software industry. 
                    Skilled in leading edge project management, web & software development tools & trends. 
                    Strong computer engineering base with a BSc in Computer Science focused in Computer Software Engineering from BRAC University. 
                    In addition to that minor on Basic Business studies to assist me through product & project management" />
                </Helmet>
                <Container className="Contact-header" fluid={true}>
                <Animate to="1" from="0" attributeName="opacity">
                    <Row className="Hamburger-Menu">
                        <Particles
                            params={particles}
                            className="particle"
                        />
                            <HamburgerMenu />
                    </Row>
                    <Row className = "Resume-main">
                        <GetResume />
                        <Col className = "Resume-download">
                        <ReactTypingEffect
                            text="Feel free to download and share!"
                            className="typical"
                            speed="50"
                            eraseDelay="500000"
                        />
                        <br>
                        </br>
                            <Button href={shubhResume}>Download</Button>
                        </Col>
                    </Row>
                    
                </Animate>
                </Container>
            </div>
        );
    }
}