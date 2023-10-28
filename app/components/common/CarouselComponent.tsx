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
      autoPlay
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
            width={1800}
            height={1800}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
