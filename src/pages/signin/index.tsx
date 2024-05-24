import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

function Signin() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Sign up';
  }, []);

  const handleNextClick = () => {
    // Mostrar el loading screen
    setIsLoading(true);

    // Simular una operación de carga (puedes reemplazar esto con tu lógica real de carga)
    setTimeout(() => {
      
      // Ocultar el loading screen después de un tiempo (simulando la finalización de la carga)
      setIsLoading(false);
      window.location.href = './menu'; 
    }, 2000);
    // Tiempo de espera de 4 segundos (puedes ajustar este valor según sea necesario)
  };

  return (
    <div className='flex flex-col items-center gap-1 mt-10 space-y-10'>

      <a href='./'>
        <button >
          <img src='/RA-LOGO-PLACEHOLDER.png' alt='logo' width='220' className='object-scale-down max-h-full' />
        </button>
      </a>

      <p className='font-barlow font-normal text-3xl'>Sign in !</p>

      <Input className='content-center' title='First Name' type='text' autoComplete='first-Name' required />
      <Input className='content-center' title='Last Name' type='text' autoComplete='Last-Name' required />
      <Input className='content-center' title='Company' type='text' autoComplete='Company Name' required />
      <Input className='content-center' title='Rol' type='text' autoComplete='Rol' required />
      <Input className='content-center' title='Email' type='text' autoComplete='Email' required />
      <Input className='content-center' title='Gender' type='text' autoComplete='Gender' required />
      <Input className='content-center' title='Password' type='password' autoComplete='Password' required />

      {!isLoading && (
        <Button className='border-2 min-w-32 min-h-12' onClick={handleNextClick} type="submit">
          Next
        </Button>
      )}

      {isLoading && (
        <div className="mt-4 flex justify-center">
          <img
            src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif"
            alt="Loading"
            className="loading w-21 h-21"
          />
        </div>
      )}

      <br />

    </div>
  );
}

export default Signin;
