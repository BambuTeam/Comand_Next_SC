import React from 'react';
import Carousel from '../components/common/CarouselComponent';
import Image from 'next/image';
import Waiter from '@/public/Images/slider/Waiter.svg';

const images = [
  '/Images/slider/Restaurant-slide1.jpeg',
  '/Images/slider/Restaurant-slide2.jpeg',
  '/Images/slider/Restaurant-slide3.jpeg',
];

function Login() {
  return (
    <div className='fixed grid h-10 grid-cols-1 md:grid-cols-2'>
      <div className='h-100 inline-block items-center justify-center align-middle '>
        <Image src={Waiter} className='waiter floating-image' alt='Waiter' />
        <Carousel images={images} />
      </div>
      <div className='bg-patter items-center justify-center'>
        <h1>
          <form className='flex h-screen items-center justify-center'>
            <div className='text-center text-white'>
              <h1>Let's explore with command to discover everything that is.</h1>
              <label className='block'>Email:</label>
              <input className='m-2 border p-2' type='email' />
              <label className='block'>Contraseña:</label>
              <input className='m-2 border p-2' type='password' />
              <button className='rounded bg-blue-500 p-3 text-white' type='submit'>
                Iniciar sesión
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
}

export default Login;
