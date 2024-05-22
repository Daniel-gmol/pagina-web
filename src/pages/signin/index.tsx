import React, { useState,useEffect } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'


function signin(){
  const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        document.title = 'Sign up'
    },[])
    
    const handleNextClick = () => {
      // Mostrar el loading screen
      setIsLoading(true);

      // Simular una operación de carga (puedes reemplazar esto con tu lógica real de carga)
      setTimeout(() => {
          // Ocultar el loading screen después de un tiempo (simulando la finalización de la carga)
          setIsLoading(false);
      }, 2000); // Tiempo de espera de 2 segundos (puedes ajustar este valor según sea necesario)
  };

return(
    <div className='flex flex-col items-center gap-1 mt-10 space-y-10'>
      
      <a href='./'>
        <button >
          <img src='/RA-LOGO-PLACEHOLDER.png' alt='logo' width='220' className='object-scale-down max-h-full' />
        </button>
      </a>

      <p className='font-barlow font-normal text-3xl'>Sign in !</p>
      
      {/* Convert into a component */}
      <Input className='content-center'  title='First Name' type='text' autoComplete='first-Name' />
      <Input className='content-center'  title='Last Name' type='text' autoComplete='Last-Name' />
      <Input className='content-center'  title='Company' type='text' autoComplete='Company Name' />
      <Input className='content-center'  title='Rol' type='text' autoComplete='Rol' />
      <Input className='content-center'  title='Email' type='text' autoComplete='Email' />
      <Input className='content-center'  title='Gender' type='text' autoComplete='Gender' />
      <Input className='content-center'  title='Password' type='password' autoComplete='Password' />

      {!isLoading && (
                <Button className='py-0 mb-4' onClick={handleNextClick}>
                    Next
                </Button>
                
            )}

      {isLoading && (
          <div className="mt-4 flex justify-center">
            <img
              id="RES"
              src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif"
              alt="Loading"
              className="w-21 h-21"
              
            />
          </div>
          
        )}
      

      <br/>
      

    </div>
  )

  
}
export default signin