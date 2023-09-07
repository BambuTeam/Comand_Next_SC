import Image from 'next/image';
import React from 'react';

function index() {
  return (
    <div className='bg_login flex h-screen flex-col items-center justify-center md:flex-row '>
      <div className='bg_login2 md:w-1/2'>
        <Image className='Waiter' src={'Waiter'} width={500} height={500} alt='Waiter' />
      </div>
      <div className='p-4 md:w-1/2 md:p-8'>
        <form className='mx-auto max-w-md'>
          <h2 className='mb-4 text-2xl font-bold'>WELCOME</h2>
          <p>Sing in with your email adress and password</p>
          <br />
          <div className='mb-4'>
            <label className='userinput mb-2 block' htmlFor='user'>
              Usuario o Correo
            </label>
            <input
              type='text'
              id='user'
              name='user'
              className='w-full border p-2'
              placeholder='User o Email'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block' htmlFor='password'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full border p-2'
              placeholder='Password'
            />
          </div>
          <div className='mb-4 flex items-center'>
            <input type='checkbox' id='remember' name='remember' className='mr-2' />
            <label htmlFor='remember'>Recordar datos de inicio de sesión</label>
          </div>
          <button type='submit' className='w-full rounded bg-blue-500 px-4 py-2 text-white'>
            Continuar
          </button>
        </form>
        <footer className='mt-10 text-center text-sm text-gray-500'>
          © <strong>2023</strong> BambuDev. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}

export default index;
