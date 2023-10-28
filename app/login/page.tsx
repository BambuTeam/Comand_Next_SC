import React from 'react';
import Image from 'next/image';

function Login() {
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
          />
        </div>
      </div>
      <div className='h-full bg-gray-300'></div>
    </div>
  );
}

export default Login;
