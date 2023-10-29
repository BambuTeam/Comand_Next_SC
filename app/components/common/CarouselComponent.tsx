'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const MyCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel
      swipeable
      emulateTouch
      autoPlay
      autoFocus
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop={true}
      interval={4000}
      className='home-carousel'
    >
      {images.map((imageUrl, index) => (
        <div key={index}>
          <Image
            src={imageUrl}
            alt={`Image ${index}`}
            width={1000}
            height={1000}
            layout='responsive'
            objectFit='contain'
            quality={100}
            sizes='100vw'
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
