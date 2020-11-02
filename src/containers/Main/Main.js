import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {isEqual} from 'lodash';
import GoogleMap from 'google-map-react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Menu from '../../components/Menu';
import Marker from '../../components/Marker';
import Line from '../../components/Line';
import styles from './Main.style';
import defaultPropsImage from '../../assets/images/props.png'

import key from '../../constants/key';
import list from './properties';

import mapStyle from './mapStyle';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      properties: [], 
      activeProperty: {id: -0, lat: 14.5812853, lng: 120.9760781}
    }
  }

  componentDidMount = () => {
    this.setState({properties: list, activeProperty: {id: list[0].id, lat: list[0].lat, lng: list[0].lng}});
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

  HandleListing = () => {
    let {properties} = this.state, list = [];
    properties.forEach( (item, key) => {
      list = [...list, this.HandleDisplayList({item, key})];
    } )
    return list;
  }

  HandlePins = () => {
    let pins = [];
    let {properties} = this.state;

    properties.forEach((pin, key) => {
      let {lat, lng} = pin;
      console.log(pin);
      pins = [...pins, <Marker key={key} lat={lat} lng={lng} data={pin} />];
    });

    return pins;
  }

  render() {
    let {activeProperty} = this.state;

    return (
      <Container fluid>
        <Row>
          <Col lg={3} style={styles.menuAndListing}>
            <Row>
              <Col lg={12}>
                <Menu />
              </Col>
              <Col lg={12} className='propsListing'>
                {this.HandleListing()}
              </Col>
            </Row>
          </Col>
          <Col lg={9} style={styles.mapContainer}>
            <div style={styles.map}>
              <GoogleMap
                google={this.props.google}
                style={mapStyle}
                bootstrapURLKeys={{ key }}
                defaultCenter={[activeProperty.lat, activeProperty.lng]}
                defaultZoom={10}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => {console.log(map,maps)}}
              >
                {this.HandlePins()}
              </GoogleMap>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
