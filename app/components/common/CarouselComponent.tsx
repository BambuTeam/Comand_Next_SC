import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '@/public/Images/slider/restaurant1.png';
import Image from 'next/image';

const SimpleCarousel = () => {
  return (
    <Carousel>
      <div>
        <Image src={Slide1} alt='Imagen1' />
      </div>
      <div>
        <Image src={Slide1} alt='Imagen1' />
      </div>
      <div>
        <Image src={Slide1} alt='Imagen1' />
      </div>
    </Carousel>
  );
};

export default SimpleCarousel;
