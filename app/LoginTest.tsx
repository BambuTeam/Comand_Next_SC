'use client';
import { signIn } from 'next-auth/react';
import Waiter from '../public/Images/home/mesero.svg';
import Image from 'next/image';

const LoginTest = () => {
  const handleClick = () => {
    signIn('google');
  };

  return (
    <div className='flex'>
      <div className='w-1/2'>
        <Image
          src={Waiter}
          alt='Picture of the author'
          width='500'
          height='500'
          className='bg-mint text-mint fill-current'
        ></Image>
      </div>

      <div>
        <button
          onClick={handleClick}
          className=' focus:ring-white-600 bg-zinc-900 p-8 hover:bg-zinc-700 '
        >
          Click To Loging
        </button>
      </div>
    </div>
  );
};

export default LoginTest;
