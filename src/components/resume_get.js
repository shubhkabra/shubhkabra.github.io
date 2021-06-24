import { Document, Page, pdfjs } from 'react-pdf';
import React, { Component } from 'react';
import shubhResume from '../const/Resume_Shubhankar_Kabra.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class GetResume extends Component {
    render() {
        return (
            <Document file = {shubhResume} className = "Pdf-doc">
                <Page pageNumber = {1}> </Page>
            </Document>
        );
    }
}