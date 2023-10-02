import React from 'react';
import { comanda } from '../../HomeTest';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoAlertFill } from 'react-icons/go';

const ComandaCard = ({ table, orderNumber }: comanda) => {
  return (
    <div className='m-3 flex max-w-md flex-row items-center justify-between rounded-3xl  bg-gray-300 px-3 py-4'>
      <div className='flex flex-col items-start justify-center  '>
        <p className='text-lg font-bold text-green-950'>
          Numero de orden: # <span className='text-gray-500'> {orderNumber}</span>
        </p>
        <p className='text-lg font-bold text-green-950'>
          Numero de mesa: # <span> {table}</span>
        </p>
      </div>
      <div className='flex flex-col items-center justify-between gap-2'>
        <BsThreeDotsVertical />

        <span className='rounded-full bg-green-900 p-1 text-yellow-400  '>
          <GoAlertFill />
        </span>
      </div>
    </div>
  );
};

export default ComandaCard;
