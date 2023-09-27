'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  const session = useSession();
  return (
    <main className='z-10 flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1>{session?.data?.user?.name}</h1>
        <button onClick={() => signOut()}>logout</button>
      </div>
    </main>
  );
}
