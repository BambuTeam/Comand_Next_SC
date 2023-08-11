import React from 'react';
import Waiter from '../public/images/home/mesero.svg'
import Image from 'next/image'


const LoginForm = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-screen bg_login">
        <div className="md:w-1/2">
          
        <Image
      src={Waiter}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
        <div className="md:w-1/2 p-4 md:p-8">
          
          <form className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">WELCOME</h2>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="user">Usuario o Correo</label>
              <input type="text" id="user" name="user" className="w-full p-2 border" />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="w-full p-2 border" />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" className="mr-2" />
              <label htmlFor="remember">Recordar datos de inicio de sesión</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
              Continuar
            </button>
          </form>
        </div>
      </div>
    );
  };
  export default LoginForm;