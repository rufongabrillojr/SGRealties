import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {isEqual} from 'lodash';
import GoogleMap from 'google-map-react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Menu from '../../components/Menu';
import Line from '../../components/Line';
import styles from './Main.style';
import googlemap from '../../assets/images/googlemap.jpg';
import defaultPropsImage from '../../assets/images/props.png'

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      properties: [
        {
          id: 0,
          name: 'Lorem ipsum dolor sit amet 1',
          price: {
            min: 2000000,
            max: 2500000
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 15.9603307,
          lng: 120.3856262,
          image: defaultPropsImage
        },
        {
          id: 1,
          name: 'Lorem ipsum dolor sit amet 2',
          price: {
            min: 1000000,
            max: 1500000
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 15.927525,
          lng: 120.3441483,
          image: defaultPropsImage
        },
        {
          id: 2,
          name: 'Lorem ipsum dolor sit amet 3',
          price: {
            min: 1234567,
            max: 1345678
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 15.782365,
          lng: 121.015441,
          image: defaultPropsImage
        },
        {
          id: 3,
          name: 'Lorem ipsum dolor sit amet 4',
          price: {
            min: 3293950,
            max: 3340593
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 14.641009,
          lng: 121.001285,
          image: defaultPropsImage
        },
        {
          id: 4,
          name: 'Lorem ipsum dolor sit amet 5',
          price: {
            min: 1000000,
            max: 0
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 16.4183969,
          lng: 120.6305563,
          image: defaultPropsImage
        },
        {
          id: 5,
          name: 'Lorem ipsum dolor sit amet 6',
          price: {
            min: 1000000,
            max: 0
          },
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          lat: 16.5183969,
          lng: 120.5305563,
          image: defaultPropsImage
        }
      ], 
      activeProperty: {id: -0, lat: 14.5812853, lng: 120.9760781}
    }
  }

  componentDidMount = () => {
    let {properties} = this.state;
    this.setState({activeProperty: {id: properties[0].id, lat: properties[0].lat, lng: properties[0].lng}});
  }

  HandleDisplayList = (data) => {
    let {item, key} = data;
    let {activeProperty} = this.state;
    let price = (item.price.max > 0) ? `P ${item.price.min} - P ${item.price.max}` : `P ${item.price.min}`;

    return(
      <div className='prop' key={key} onClick={ () => {
        this.setState({activeProperty: {id: item.id, lat: item.lat, lng: item.lng}});
        }
      }>
        <Card className={`propCard ${ isEqual(activeProperty.id, item.id) ? 'active': '' }`}>
          <Row noGutters>
            <Col lg={4}><Card.Img variant="top" src={defaultPropsImage} /></Col>
            <Col lg={8}>
              <Card.Body>
                <div className='propName'>{item.name}</div>
                <div className='propDesc truncate'>{item.description} </div>
                <div className='propPrice'>{price}</div>
                {/* <div>{item.lat} {item.lng}</div> */}
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Line />
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
    let {activeProperty} = this.state;
    console.log(this.state);
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
            <div style={styles.map}>
              <GoogleMap
                bootstrapURLKeys={{ key: 'AIzaSyAW--YNqKDQButqmt3lRtVktT0TtoRpD7s' }}
                defaultCenter={[activeProperty.lat, activeProperty.lng]}
                defaultZoom={10}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => {console.log(map,maps)}}
              ></GoogleMap>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
