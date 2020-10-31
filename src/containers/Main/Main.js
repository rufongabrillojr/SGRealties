import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Image, Navbar, Card, Link } from 'react-bootstrap';

import Menu from '../../components/Menu';
import Line from '../../components/Line';

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
          name: 'Lorem ipsum dolor sit amet 1',
          price: {
            min: 2000000,
            max: 2500000
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 15.9603307,
          long: 120.3856262,
          image: defaultPropsImage
        },
        {
          name: 'Lorem ipsum dolor sit amet 2',
          price: {
            min: 1000000,
            max: 1500000
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 15.927525,
          long: 120.3441483,
          image: defaultPropsImage
        },
        {
          name: 'Lorem ipsum dolor sit amet 3',
          price: {
            min: 1234567,
            max: 1345678
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 15.782365,
          long: 121.015441,
          image: defaultPropsImage
        },
        {
          name: 'Lorem ipsum dolor sit amet 4',
          price: {
            min: 3293950,
            max: 3340593
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 14.641009,
          long: 121.001285,
          image: defaultPropsImage
        },
        {
          name: 'Lorem ipsum dolor sit amet 5',
          price: {
            min: 1000000,
            max: 0
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 16.4183969,
          long: 120.6305563,
          image: defaultPropsImage
        },
        {
          name: 'Lorem ipsum dolor sit amet 6',
          price: {
            min: 1000000,
            max: 0
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 16.5183969,
          long: 120.5305563,
          image: defaultPropsImage
        }
      ]
    }
  }

  HandleDisplayList = (data) => {
    let {item, key} = data;
    console.log(data);

    let price = (item.price.max > 0) ? `P ${item.price.min} - P ${item.price.max}` : `P ${item.price.min}`;

    return(
      <div className='prop' key={key}>
        <Link />
      <Card className='propCard'>
        <Row noGutters>
          <Col lg={4}><Card.Img variant="top" src={defaultPropsImage} /></Col>
          <Col lg={8}>
            <Card.Body>
              <div className='propName'>{item.name}</div>
              <div className='propDesc truncate'>{item.description} </div>
              <div className='propPrice'>{price}</div>
              {/* <div>{item.lat} {item.long}</div> */}
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Line/>
      </div>
    )
  }

  HandleDisplayListing = () => {
    let {properties} = this.state, list = [];
    properties.forEach( (item, key) => {
      list = [...list, this.HandleDisplayList({item, key})];
    } )
    return list;
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
              <Col lg={12} className='propsListing'>
                {this.HandleDisplayListing()}
              </Col>
            </Row>
          </Col>
          <Col lg={9} style={styles.mapContainer}>
            <Image src={googlemap} fluid style={styles.map}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
