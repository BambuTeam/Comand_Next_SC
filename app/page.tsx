'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import LoginTest from './LoginTest';
import HomeTest from './HomeTest';

export default function Home() {
  const session = useSession();

  return (
    <main className='z-10 flex min-h-screen flex-col items-center justify-between p-24'>
      {session.status === 'unauthenticated' ? <LoginTest /> : <HomeTest />}
    </main>
  );
}
