'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import LoginTest from '@/components/home/LoginTest';
import Home from '@/components/home/Home';

export default function Page() {
  const session = useSession();

  return (
    <main className='z-10 flex min-h-screen flex-col items-center justify-between p-24'>
      {session.status === 'unauthenticated' ? <LoginTest /> : <Home />}
    </main>
  );
}
