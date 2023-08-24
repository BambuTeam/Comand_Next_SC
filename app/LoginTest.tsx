'use client';
import { signIn } from 'next-auth/react';

const LoginTest = () => {
  const handleClick = () => {
    signIn('google');
  };

  return <button onClick={handleClick}>Click To Loging</button>;
};

export default LoginTest;
