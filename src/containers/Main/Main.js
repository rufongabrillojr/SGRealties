import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Spinner } from 'react-bootstrap';

import styles from './Main.style';

class Main extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div style={styles.container}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        Hello World
      </div>
    );
  }
}

export default Main;
