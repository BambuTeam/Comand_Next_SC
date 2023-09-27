'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';

const HomeTest = () => {
  const session = useSession();
  return (
    <div>
      <h1>Test page</h1>
      <h1>{session?.data?.user?.name}</h1>
      <button onClick={() => signOut()}>logout</button>
    </div>
  );
};

export default HomeTest;
