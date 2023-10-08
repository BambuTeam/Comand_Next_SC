'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import ComandaCard from '@/components/dashboard/ComandaCard';
import { comanda } from '@/utils/types';

//TODO: Delete this test data after finish the desing
const data_comandas: comanda[] = [
  { table: 'a1', orderNumber: 'abcd' },
  { table: 'a2', orderNumber: 'abce' },
  { table: 'a3', orderNumber: 'abc4' },
  { table: 'a4', orderNumber: 'abcr' },
];

const Home = () => {
  //TODO: make comandas fetch witch react query
  //TODO: load esqueleton with react query loading
  const comandaData = data_comandas;

  const session = useSession();

  if (!comandaData.length) {
    return <div>No hay comandas disponibles</div>;
  }
  return (
    <div className='bg-white'>
      <div className=' text-lg text-green-950'>
        <h1 className='m-4 px-2 py-3 text-[3.5rem]'>CONTROL DE COMANDAS</h1>
        <hr className='text-green-950' />
      </div>

      {comandaData.map((comanda: comanda) => {
        return (
          <ComandaCard
            key={`comanda-${comanda.orderNumber}`}
            orderNumber={comanda.orderNumber}
            table={comanda.table}
          />
        );
      })}

      <h1>{session?.data?.user?.name}</h1>
      <button onClick={() => signOut()}>npm logout</button>
    </div>
  );
};

export default Home;
