import React from 'react';

function LoginSesion() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-[#1a1a1a]'>
      <div className='flex w-full max-w-screen-xl'>
        {/* Columna Izquierda */}
        <div className='... w flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500  via-30% to-emerald-500 to-90%'>
          {/* Contenido de la columna izquierda */}
          <div>
            <h1 className='w-50 mb-4 flex items-center justify-center text-center text-6xl text-white'>
              Aca tengo que renderizar un ptx!! slider
            </h1>
            {/* Agrega el contenido que desees */}
          </div>
        </div>

        {/* Columna Derecha (Formulario de inicio de sesión) */}
        <div className='flex w-1/2 items-center justify-center'>
          <div className='w-96 rounded bg-white p-8 shadow-md '>
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
                <input
                  type='password'
                  id='password'
                  className='w-full rounded-md border px-3 py-2'
                />
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
      </div>
    </div>
  );
}

export default LoginSesion;
