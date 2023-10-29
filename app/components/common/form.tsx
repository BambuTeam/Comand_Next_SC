'use client';

import { useState } from 'react';

const FormHome = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex h-full min-h-screen w-screen items-center justify-center p-10'>
      <div className=' mb-4 w-96 rounded bg-[#0d0d0d] bg-opacity-25 p-10 px-8 pb-8 pt-6 shadow-lg shadow-[#fefefe]'>
        <h1 className='flex items-center justify-center text-3xl text-white'>
          <span className='font-black text-[#59C8E4]'>Hello</span>, ¡ Welcome !
        </h1>
        <form onSubmit={handleSubmit} className='h-1/2 rounded p-10 text-left'>
          <div className='mb-2'>
            <label htmlFor='email' className='mb-2 block text-sm font-bold text-white'>
              Correo:
            </label>
            <input
              type='text'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='focus:shadow-outline border-b-1 w-full appearance-none border border-l-0 border-r-0 border-t-0 bg-transparent px-3 py-2 leading-tight text-white shadow focus:outline-none'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='mb-2 block text-sm font-bold text-white'>
              Contraseña:
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='focus:shadow-outline border-b-1 w-full appearance-none border border-l-0 border-r-0 border-t-0 bg-transparent px-3 py-2 leading-tight text-white shadow focus:outline-none'
            />
          </div>

          <div className='mb-6'>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                name='rememberMe'
                checked={formData.rememberMe}
                onChange={handleChange}
                className='mr-2 leading-tight'
              />
              <span className='text-sm'>Recordar contraseña</span>
            </label>
          </div>

          <div className='text-center'>
            <button
              type='submit'
              className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormHome;
