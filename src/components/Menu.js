import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Image, Navbar } from 'react-bootstrap';

import logo from '../assets/images/white-logo.png';

class Menu extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <Navbar>
        <Navbar.Brand href="#">
          <Image src={logo} style={styles.logo} fluid/>
          SG Realties
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Menu;

const styles = {
  logo:{
    width: '30px',
    height: '30px'
  },
}