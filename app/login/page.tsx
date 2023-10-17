import React from 'react';

const Login: React.FC = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='flex w-4/5 rounded-lg bg-white p-4 shadow-md'>
        {/* Parte izquierda (carousel) */}
        <div className='w-1/2 p-4'>{/* Carousel de imágenes aquí */}</div>

        {/* Parte derecha (formulario de inicio de sesión) */}
        <div className='w-1/2 p-4'>
          <h1 className='mb-4 text-3xl font-bold text-gray-800'>Iniciar Sesión</h1>
          <form>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full rounded-md border px-3 py-2'
                placeholder='Correo electrónico'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-gray-700'>
                Contraseña
              </label>
              <input
                type='password'
                id='password'
                className='w-full rounded-md border px-3 py-2'
                placeholder='Contraseña'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='remember' className='inline-flex items-center'>
                <input type='checkbox' id='remember' className='mr-2' />
                Recordar contraseña
              </label>
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
