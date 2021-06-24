import React, { Component } from 'react';
import '../loading/style.css';
import { Redirect } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {

  state = {
    redirect: true
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/home" />
      : <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Shubhankar Kabra</title>
                <link rel="canonical" href="http://shubhkabra.como/" />
                <meta name="description" content="Shubhankar Kabra - Student | Software Engineer | Trader" />
         </Helmet>
        <div className="Loading-header">
          <PuffLoader
            size={'40vw'}
            color={"#fff"}
            loading={true}
          />
        </div>
        </div>
  }
}

export default Loading;
