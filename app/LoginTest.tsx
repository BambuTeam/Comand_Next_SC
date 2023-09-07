'use client';
import { signIn } from 'next-auth/react';
/* import Waiter from '../public/Images/mesero.svg';
import Image from 'next/image'; */
import animation from '../public/Images/animation/animationhome.json';
import Lottie from 'lottie-react';

const LoginTest = () => {
  const handleClick = () => {
    signIn('google');
  };

  return (
    <div className='bg_screen1 flex items-center justify-center'>
      <div className=' mt-5 flex h-screen '>
        <Lottie className='Lottie_style' animationData={animation} />
      </div>

      <div className=' '>
        <button
          onClick={handleClick}
          className=' h-24 w-48 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700'
        >
          <h1 className='text-2xl text-[#0d0d0d] md:font-bold'>LOGIN</h1>
        </button>
      </div>
    </div>
  );
};

export default LoginTest;
