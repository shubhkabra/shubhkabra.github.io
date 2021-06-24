import React, { Component } from 'react';
import '../cv_img/style.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import { Document, Page, pdfjs } from 'react-pdf';
import shubhResume from '../../const/Resume_Shubhankar_Kabra.pdf'
import shubhpic from '../../assets/img/shubhpic.jpeg'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export default class CRI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
       <img src = {shubhpic} className = "shubhpic"></img>
     </div>
    );
  }
}