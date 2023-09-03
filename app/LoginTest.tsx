'use client';
import { signIn } from 'next-auth/react';
import Waiter from '../public/Images/home/mesero.svg';
import Image from 'next/image';

const LoginTest = () => {
  const handleClick = () => {
    signIn('google');
  };

  return (
    <div className='bg_screen1 flex items-center justify-center'>
      <div className='mt-10 flex h-screen w-1/2 items-center justify-center '>
        <Image src={Waiter} alt='Picture of the author' height='500' width='500'></Image>
      </div>

      <div className=' '>
        <button
          onClick={handleClick}
          className=' rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700'
        >
          Click To Loging
        </button>
      </div>
    </div>
  );
};

export default LoginTest;
