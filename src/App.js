import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { ResourceCenterRouter } from './resource-center-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () {
    return (
      <ResourceCenterRouter/>
    );
  }
}

export default App;
