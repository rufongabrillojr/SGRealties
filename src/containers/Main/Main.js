import React, { useRef, useState, Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Navigation, Controller, Autoplay } from 'swiper';
import 'bootstrap/dist/css/bootstrap.min.css';
import {isEqual, isEmpty} from 'lodash';
import GoogleMap from 'google-map-react';
import { Container, Row, Col, Image, Card, Button, Carousel, Form } from 'react-bootstrap';
import Menu from '../../components/Menu';
import Marker from '../../components/Marker';
import Line from '../../components/Line';
import styles from './Main.style';
import mapLoading from '../../assets/images/mapLoading.gif'
import defaultPropsImage from '../../assets/images/props.png'
import defaultPropsImage1 from '../../assets/images/property1.jpg'
import defaultPropsImage2 from '../../assets/images/property2.jpg'
import defaultPropsImage3 from '../../assets/images/property3.jpeg'
import defaultPropsImage4 from '../../assets/images/property4.jpg'
import defaultPropsImage5 from '../../assets/images/property5.jpeg'
import defaultPropsImage6 from '../../assets/images/property6.jpg'


import 'swiper/swiper.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

import key from '../../constants/key';
import list from './properties';

SwiperCore.use([EffectCube, Navigation, Controller, Autoplay]);

const testimonials = [
  {
    name: 'Empoy',
    picture: 'https://firebasestorage.googleapis.com/v0/b/sgrealties-a2b77.appspot.com/o/staging%2Fempoy.jpeg?alt=media&token=6fe5590c-6c7f-4ab1-be4b-b9d6c649cad4',
    message: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. '
  },
  {
    name: 'Daneil Padislla',
    picture: 'https://firebasestorage.googleapis.com/v0/b/sgrealties-a2b77.appspot.com/o/staging%2Fdaniel.jpg?alt=media&token=51665baf-1497-43c3-a4a5-2d5dbe5b3c1c',
    message: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. '
  },
  {
    name: 'Liza Soberano',
    picture: 'https://firebasestorage.googleapis.com/v0/b/sgrealties-a2b77.appspot.com/o/staging%2Flisa.jpg?alt=media&token=b012ded4-99b8-423b-a67d-0324e69a803f',
    message: 'Lorem ipsum dolor sit amet.'
  }
]

const HandleDisplayGoogleMap = () => {
  let { activeProperty, isMapLoaded } = this.state;
  return (
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
  );
}

const  HandleDisplayContactForm = () => {
  return (
    <div className="contact-form">
      <p>Send us a message, we'll get back to you as soon as we can.</p>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Contact number</Form.Label>
          <Form.Control type="email" placeholder="Enter your contact number" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Inquery</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

const HandleDisplayList = (data) => {
  let {item, key} = data, 
  price = (!isEmpty(item.price.max)) ? `P ${item.price.min} - P ${item.price.max}` : `P ${item.price.min}`;

  item = {...item, zoom: 10}
  return(
    <SwiperSlide key={key} data={'hello world'}>
      <Row>
        <Col lg={6}>
          <Image src={item.image} style={{width: '100%'}}/>
        </Col>
        <Col lg={6}>
          <div className='listingDescription'>
            <div style={{position:'relative', 'zIndex': 9}}>              
              <h1>{item.name}</h1>
              <h2>{item.description} </h2>
              <Button size="sm"  onClick={ () => console.log('Inquire!') }> Know More </Button>
              <Button className='count' size="sm"  onClick={ () => console.log('Inquire!') }> {(key+1)}/{Object.keys(list).length} </Button>
            </div>
          </div>
        </Col>
      </Row>
    </SwiperSlide>
  )
}

const Properties = () => {
  let properties = [];
  list.forEach( (item, key) => {
    properties = [...properties, HandleDisplayList({item, key})];
  } )
  return properties;
}

const Listing = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <Container fluid>
      <Row>
        <Col lg={12} style={styles.menuAndListing}>
          <Row>
            <Col lg={12} className='content'>
              <Menu />
            </Col>
            <Col lg={12} className='banner'>
              <div className='content'>
                <Swiper  
                controller={{ control: controlledSwiper }} 
                effect="cube"  
                // timeout={1}
                // autoplay={true}
                onSlideChange={(e) => console.log('slide change', e, controlledSwiper)}
                navigation 
                pagination
                onSwiper={setControlledSwiper}
                >
                  {Properties()}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={12} >
          {HandleDisplayContactForm()}
        </Col>
      </Row>
    </Container>
  )
}

export default Listing;
