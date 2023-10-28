import React from 'react';
import Carousel from '../components/common/CarouselComponent';

const images = [
  '/Images/slider/Restaurant-slide1.jpeg',
  '/Images/slider/Restaurant-slide2.jpeg',
  '/Images/slider/Restaurant-slide3.jpeg',
];

function Login() {
  return (
    <div className='fixed grid h-10 grid-cols-1 md:grid-cols-2'>
      <div className='h-100 inline-block items-center justify-center align-middle '>
        <Carousel images={images} />
      </div>
      <div className='bg-patter items-center justify-center'>
        <h1>Formulario de inicio</h1>
      </div>
    </div>
  );
}

export default Login;
