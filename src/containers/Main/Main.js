import React, { useRef, useState, Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube } from 'swiper';
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

SwiperCore.use([EffectCube]);

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

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      properties: [], 
      activeProperty: {},
      isMapLoaded: false,
      showInfoPanel: false, 
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
      <SwiperSlide key={key}>
        <Row>
          <Col lg={6}>
            <Image src={item.image} style={{width: '100%'}}/>
          </Col>
          <Col lg={6}>
            <div className='listingDescription'>
              <h1>{item.name}</h1>
              <h2>{item.description} </h2>
              <Button size="sm"  onClick={ () => console.log('Inquire!') }> Know More </Button>
            </div>
          </Col>
        </Row>
      </SwiperSlide>
    )
  }

  HandleDisplayContactForm = () => {
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

  HandleDisplayTestimonials = () => {
    let {activeProperty} = this.state;
    return (
      <div>
        <Carousel>
          {
            testimonials.map( (i, ii) => {
              console.log(i, ii);
              return (
                <Carousel.Item key={ii}>
                  <div style={{width: '100px', height: '100px', overflow: 'hidden'}}>
                    <div className='testimonial-image' style={{background: `url('${i.picture}') no-repeat`}}></div>
                    <p>{i.name}</p>
                  </div>
                  <p>{i.message}</p>
                </Carousel.Item>
              )
            } )
          }
        </Carousel>
      </div>
    );
  }

  HandleDisplayContactNumbers = () => {
    return (
      <div>
        Contact numbers here
      </div>
    );
  }

  HandleDisplayPropertyInformation = () => {
    let {activeProperty} = this.state;
    return (
      <Row>
        <Col lg={12}>
          <Button variant="link" size="sm"  onClick={ () => this.setState({ showInfoPanel: false })}> Close </Button>
        </Col>
        <Col lg={12}>
          <div className='propertyThumbnail' style={{width: '100%', height: 'unset'}}>
            <Carousel>
              <Carousel.Item><Image src={activeProperty.image} style={{width: '100%'}}/></Carousel.Item>
              <Carousel.Item><Image src={activeProperty.image} style={{width: '100%'}}/></Carousel.Item>
              <Carousel.Item><Image src={activeProperty.image} style={{width: '100%'}}/></Carousel.Item>
            </Carousel>
          </div>
        </Col>
        <Col lg={12}>
          <h2>{activeProperty.name}</h2>
          <p>{activeProperty.description}</p>
        </Col>
        <Col lg={12}>
          <p><b>Phone:</b> 0966 147 6295</p>
          <p><b>Email:</b> info.sgrealties@gmail.com</p>
          <Button variant="secondary" size="sm" onClick={ () => console.log('ss') }> Send a message or book a visit </Button>
        </Col>
        <Col lg={12} className='horizontal-line'></Col>
        <Col lg={12}>
          {this.HandleDisplayTestimonials()}
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

  HandleDisplayGoogleMap = () => {
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

  render() {
    let { showInfoPanel } = this.state;
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
      <Container fluid>
        <Row>
          <Col lg={12} style={styles.menuAndListing}>
            <Row>
              <Col lg={12}>
                <Menu />
              </Col>
              <Col lg={12} className='propsListing' > 
                <Swiper  controller={{ control: controlledSwiper }} effect="cube"  navigation={true} pagination={true} spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                  {this.HandleListing()}
                  <div className="swiperController">
                    <Button size="sm"  onClick={ () => console.log('Inquire!') }> Previous </Button>
                    <Button size="sm"  onClick={ () => console.log('Inquire!') }> Next </Button> 
                  </div>
                </Swiper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
