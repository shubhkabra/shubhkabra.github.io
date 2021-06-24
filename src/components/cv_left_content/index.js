import React, { Component } from 'react';
import '../cv_left_content/style.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHdd } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Lightbox from 'react-image-lightbox';
import {Modal, Button} from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {Link, useHistory} from 'react-router-dom';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);

class CLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render(){
    const { photoIndex, isOpen, show } = this.state;
    return (
      <Slide> 
        <Bounce >
          <div className="clc_main">
          <div className="clc_container">
            <Fade top cascade>
            <h1 className="clc_header">About Me!</h1>
            </Fade>
              <ColoredLine color="#FFC466" />
              <Fade top cascade>
              <div className="AboutBtnContainer">
                <ReactTypingEffect
                              text="Currently a junior studying Computer Science and Statistics at 
                              University of Illinois at Urbana-Champaign. Most recent experience as a 
                              Software Developmet Intern at PreVeil."
                              className="typical"
                              speed="50"
                              eraseDelay="500000"
                />
              </div>
            </Fade>
          </div>
              
          </div>
        </Bounce>
      </Slide>
   );
  }

  
}

export default CLC;
