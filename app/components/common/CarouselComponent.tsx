import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function ImageSlider() {
  return (
    <Carousel>
      <div>
        <Image src='/Images/slider/restaurant1.png' alt='Imagen 1' />
      </div>
      <div>
        <Image src='/Images/slider/restaurant1.png' alt='Imagen 2' />
      </div>
      <div>
        <Image src='/Images/slider/restaurant1.png' alt='Imagen 3' />
      </div>
    </Carousel>
  );
}

export default ImageSlider;
