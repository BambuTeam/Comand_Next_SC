'use client';
import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Comanda } from '@/utils/types';

import styles from './comanda.module.css';

const defaultData: Comanda[] = [
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
  {
    trakingId: '1234',
    information: 'this is data from a example only',
    order: 'may 22 33 00',
    status: 'status',
    notes: 'some notes',
  },
];

const columnHelper = createColumnHelper<Comanda>();

//TODO: Hacer un repositoriode modelos para la gestion de las tablas
//TODO: Investigar una estrategia de BFF
//TODO: tomar una libreria como dayjs o moment para la gestion de fechas
const columns = [
  columnHelper.accessor('trakingId', {
    cell: info => info.getValue(),
    header: () => <span>QR traking ID</span>,
  }),
  columnHelper.accessor('information', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Informacion</span>,
  }),
  columnHelper.accessor('order', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Order</span>,
  }),
  columnHelper.accessor('status', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Status</span>,
  }),
  columnHelper.accessor('notes', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span className='h-full w-full bg-gray-600'>Notas</span>,
  }),
];

function Comandas() {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main className='mx-5 mt-10 h-full w-full'>
      <div className={`principal-table `}>
        <h1 className='text-2xl font-bold uppercase text-[#1C3532]'>
          Order <span className='text-base'> | order list</span>
        </h1>
      </div>
      <div
        className={`tablaConBorde flex w-full items-center justify-center text-center ${styles.tablaConBorde}`}
      >
        <table className='w-4/5 gap-2 border border-2 border-[#838CAD]'>
          <thead className='bg-[#212330] px-1 py-2 text-white'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className='h-14'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td className='p- bg-[#838CAD] text-white' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className='my-2 rounded-lg bg-gray-700 px-1 py-2 text-white'>Add New Order</button>
    </main>
  );
}

export default Comandas;
