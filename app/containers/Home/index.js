/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <NavBar siteName="My website"/>

        </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
