import React from 'react';
import { comanda } from '../../HomeTest';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoAlertFill } from 'react-icons/go';

const ComandaCard = ({ table, orderNumber }: comanda) => {
  return (
    <div className='m-3 flex flex-row items-center justify-center rounded-md  bg-slate-400 px-3 py-4'>
      <div className='flex flex-col items-center justify-center rounded-md '>
        <p>
          Numero de orden: # <span> {orderNumber}</span>
        </p>
        <p>
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
