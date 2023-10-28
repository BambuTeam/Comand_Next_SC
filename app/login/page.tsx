import React from 'react';
import Carousel from '../components/common/CarouselComponent';

const images = [
  '/Images/slider/Restaurant-slide1.jpeg',
  '/Images/slider/Restaurant-slide2.jpeg',
  '/Images/slider/Restaurant-slide3.jpeg',
];

function Login() {
  return (
    <div className='grid  grid-cols-1 md:grid-cols-2'>
      <div className=' bg-gray-200'>
        <div className=' items-center justify-center'>
          <Carousel images={images} />
        </div>
      </div>
      <div className='bg-patter items-center justify-center'></div>
    </div>
  );
}

export default Login;
