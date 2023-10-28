import React from 'react';
import Image from 'next/image';

function LoginSesion() {
  return (
    <div className='grid h-full grid-cols-1 md:grid-cols-2'>
      <div className='relative h-full bg-gray-200'>
        <div className='flex  w-full items-center justify-center'>
          <Image
            src='/Images/slider/Restaurant-slide1.jpeg'
            alt='Mi imagen'
            layout='intrinsic'
            width={1000}
            height={1000}
            objectFit='cover'
          />
        </div>
      </div>
      <div className='h-full bg-gray-300'>{/* Contenido de la segunda columna */}</div>
    </div>
  );
}

export default LoginSesion;
