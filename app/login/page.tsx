import React from 'react';
import Image from 'next/image';

function Login() {
  return (
    <div className='grid  grid-cols-1 md:grid-cols-2'>
      <div className=' bg-gray-200'>
        <div className=' fixed w-full items-center justify-center'>
          <Image
            src='/Images/slider/Restaurant-slide1.jpeg'
            alt='Mi Restaurante'
            layout='intrinsic'
            width={900}
            height={900}
          />
        </div>
      </div>
      <div className='h-full bg-gray-300'></div>
    </div>
  );
}

export default Login;
