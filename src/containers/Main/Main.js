import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Image, Navbar } from 'react-bootstrap';

import Menu from '../../components/Menu';

import styles from './Main.style';

import googlemap from '../../assets/images/googlemap.jpg';
import logo from '../../assets/images/white-logo.png';
import defaultPropsImage from '../../assets/images/props.png'

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      properties: [
        {
          name: 'Prop 1',
          price: {
            min: 2000000,
            max: 2500000
          },
          lat: 15.9603307,
          long: 120.3856262,
          image: defaultPropsImage
        },
        {
          name: 'Prop 2',
          price: {
            min: 1000000,
            max: 1500000
          },
          lat: 15.927525,
          long: 120.3441483,
          image: defaultPropsImage
        },
        {
          name: 'Prop 3',
          price: {
            min: 1234567,
            max: 1345678
          },
          lat: 15.782365,
          long: 121.015441,
          image: defaultPropsImage
        },
        {
          name: 'Prop 4',
          price: {
            min: 3293950,
            max: 3340593
          },
          lat: 14.641009,
          long: 121.001285,
          image: defaultPropsImage
        },
        {
          name: 'Prop 5',
          price: {
            min: 1000000,
            max: 0
          },
          lat: 16.4183969,
          long: 120.6305563,
          image: defaultPropsImage
        }
      ]
    }
  }

  HandleDisplayList = () => {

  }

  HandleDisplayListing = () => {
    let {properties} = this.state;
    
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={3} style={styles.menuAndListing}>
            <Row>
              <Col lg={12}>
                <Menu />
              </Col>
              <Col lg={12}>
                
              </Col>
            </Row>
          </Col>
          <Col lg={9}>
            <Image src={googlemap} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
