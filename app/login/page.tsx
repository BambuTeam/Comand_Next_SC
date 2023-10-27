import React from 'react';

function LoginSesion() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-96 rounded bg-white p-8 shadow-md'>
        <h2 className='mb-4 text-2xl'>Iniciar sesión</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='mb-2 block text-sm font-bold text-gray-700'>
              Correo electrónico
            </label>
            <input type='email' id='email' className='w-full rounded-md border px-3 py-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='mb-2 block text-sm font-bold text-gray-700'>
              Contraseña
            </label>
            <input type='password' id='password' className='w-full rounded-md border px-3 py-2' />
          </div>
          <button
            type='submit'
            className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none'
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginSesion;
