import React from 'react';
import { h1, Carousel, } from 'react-bootstrap';
 
import slide1  from '../../image/slide1.png';
import slide0  from '../../image/backgroundimg.jpg'; 
import slide3  from '../../image/slide3.jpg';  
import Header from './Header.js'

function Hr() {
  return (
    <div>
      <Header/>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide0}
            alt="First slide"height={800}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Second slide" height={800}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide" height={800}
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <h1 style={{ textAlign: 'center' , paddingTop: 20, color: 'blue'}}>Welcome to Bunbu!</h1>
      </div>
    </div>
  );

}
export default Hr;