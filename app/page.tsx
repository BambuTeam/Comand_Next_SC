'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import Home from '@/components/home/Home';

export default function Page() {
  const session = useSession();

  return (
    <main>
      <Home />
      {/* TODO: habilitarlo luego de las preubas  */}
      {/* {session.status === 'unauthenticated' ? <LoginTest /> : <Home />} */}
    </main>
  );
}
