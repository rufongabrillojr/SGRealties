import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {isEqual, isEmpty} from 'lodash';
import GoogleMap from 'google-map-react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Menu from '../../components/Menu';
import Marker from '../../components/Marker';
import Line from '../../components/Line';
import styles from './Main.style';
import mapLoading from '../../assets/images/mapLoading.gif'

import key from '../../constants/key';
import list from './properties';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      properties: [], 
      activeProperty: {},
      isMapLoaded: false,
      showInfoPanel: false
    }
  }

  componentDidMount = () => {
    this.setState({properties: list, activeProperty: {id: -1, lat: 14.5810706, lng: 120.9753696, zoom: 8}});
  }

  HandleDisplayList = (data) => {
    let {item, key} = data, 
        {activeProperty} = this.state,
        price = (!isEmpty(item.price.max)) ? `P ${item.price.min} - P ${item.price.max}` : `P ${item.price.min}`;

    item = {...item, zoom: 10}
    return(
      <div className='prop' key={key} onClick={ () => this.setState({ activeProperty: item, showInfoPanel: true })}>
        <Card className={`propCard ${ isEqual(activeProperty.id, item.id) ? 'active': '' }`}>
          <Row noGutters>
            <Col lg={4}>
              <div className='propertyThumbnail'>
                <Card.Img variant="top" src={item.image} />
              </div>
            </Col>
            <Col lg={8}>
              <Card.Body>
                <div className='propName'>{item.name}</div>
                <div className='propDesc truncate'>{item.description} </div>
                <div className='propPrice'>{price}</div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Line />
      </div>
    )
  }

  HandleDisplayPropertyInformation = () => {
    let {activeProperty} = this.state;
    console.log(activeProperty);
    return (
      <Row>
        <div onClick={ () => this.setState({ showInfoPanel: false })}>Close</div>
        <Col lg={12}>
          <div className='propertyThumbnail' style={{width: '100%', height: 'unset'}}>
            <Image src={activeProperty.image} style={{width: '100%'}}/>
          </div>
        </Col>
        <Col lg={12}>
          <h2>{activeProperty.name}</h2>
          <p>{activeProperty.description}</p>
        </Col>
        <Col lg={12}>
          Price here
        </Col>
        <Col lg={12}>
          Iquire button here
        </Col>
        <Col lg={12}>
          Contact form
        </Col>
      </Row>
    ) 
  }

  HandleListing = () => {
    let { properties } = this.state, 
        list = [];

    properties.forEach( (item, key) => {
      list = [...list, this.HandleDisplayList({item, key})];
    } )
    return list;
  }

  HandlePins = () => {
    let { properties } = this.state, 
        pins = [];

    properties.forEach((pin, key) => {
      let {lat, lng} = pin;
      pins = [...pins, <Marker key={key} lat={lat} lng={lng} data={pin} />];
    });

    return pins;
  }

  render() {
    let {activeProperty, isMapLoaded, showInfoPanel} = this.state;

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
          <Col lg={3} style={styles.propertyInformation, {'display': showInfoPanel ? 'block': 'none'}}>
            {this.HandleDisplayPropertyInformation()}
          </Col>

          <Col style={styles.mapContainer}>
            <div style={styles.map}>
              {!isMapLoaded && <Image src={mapLoading} style={styles.mapLoading} fluid />}
              <GoogleMap
                bootstrapURLKeys={{ key }}
                center={[activeProperty.lat, activeProperty.lng]}
                zoom={activeProperty.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => { 
                  this.setState({isMapLoaded: true})
                }}
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
