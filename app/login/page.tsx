import React from 'react';
import Slide1 from '@/public/Images/slider/restaurant1.png';
import Image from 'next/image';

const Login: React.FC = () => {
  return (
    <div className='flex'>
      <div className='relative h-64 w-1/2 '>
        <Image className='h-screen object-cover' src={Slide1} alt='Imagen1' />
      </div>
      <div className='h-screen w-1/2 bg-gray-300'>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block font-medium text-gray-600'>
              Correo Electrónico
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full rounded border border-gray-300 p-2'
              placeholder='tucorreo@example.com'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block font-medium text-gray-600'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full rounded border border-gray-300 p-2'
              placeholder='Contraseña'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='remember' className='flex items-center'>
              <input type='checkbox' id='remember' name='remember' className='mr-2' />
              <span className='font-medium text-gray-600'>Recordar Contraseña</span>
            </label>
          </div>
          <button
            type='submit'
            className='w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600'
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
