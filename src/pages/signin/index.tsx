import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { withAuth } from '@/lib/auth';
import axios, {AxiosError} from 'axios';

function Signin({user}: {user: any}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isValidUser, setIsValidUser] = React.useState(true);
  const [error, setError] = React.useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    document.title = 'Sign up';
    if (user) {
      if (user.rol === 'user') {
        setTimeout(() => {
          window.location.href = '/menu';
        }, 750);
      } else if (user.rol === 'admin') {
        setTimeout(() => {
          window.location.href = '/admin';
        }, 750);
      }
    }
  }, []);

  const handleNextClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Mostrar el loading screen
    setIsLoading(true);

    const firstName = (event.target as HTMLFormElement)["First name"].value;
    const lastName = (event.target as HTMLFormElement)["Last name"].value;
    const password = (event.target as HTMLFormElement)["Password"].value;
    const company = (event.target as HTMLFormElement)["Company"].value;
    const email = (event.target as HTMLFormElement)["Email"].value;
    const language = (event.target as HTMLFormElement)["Language"].value;
    const gender = (event.target as HTMLFormElement)["Gender"].value;

    // Simular una operación de carga (puedes reemplazar esto con tu lógica real de carga)
      try {
        const response = await axios.post(`${API_URL}/api/users`,
          {
            "first_name" : firstName,
            "last_name" : lastName,
            "password_" : password,
            "company" : company,
            "email" : email,
            "language_" : language,
            "gender" : gender,
          },
          { withCredentials: true }
        );
        if (response.status === 200) {
          console.log('Usuario creado correctamente');
          setTimeout(() => {
            window.location.href = './menu'; 
          }, 750);
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
        const err = error as AxiosError
        console.error(err.response?.data)
        console.error('Error:', error);
      }
  };

  return (
    <div className='flex flex-col justify-evenly h-full items-center gap-1 space-y-2'>

      <a href='./'>
        <button >
          <img src='/rockwellautomation-logo.png' alt='logo' width='220' className='object-scale-down max-h-full' />
        </button>
      </a>

      <p className='font-barlow font-normal text-3xl'>Sign in !</p>

      <form className='flex flex-col space-y-5' onSubmit={handleNextClick}>
      <Input  title='First name' type='text' autoComplete='first-Name' required />
      <Input  title='Last name' type='text' autoComplete='Last-Name' required />
      <Input  title='Company' type='text' autoComplete='Company Name' required />
      <Input  title='Language' type='text' autoComplete='Language' required />
      <Input  title='Email' type='text' autoComplete='Email' onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  const regex = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$');
                  const value = e.target.value;
                  if (regex.test(value)){
                    setIsValidUser(true);
                  } else{
                    setIsValidUser(false);
                  }
                }}
                isValid={isValidUser}
                errorMessage={`${error ? 'Wrong email' : 'Invalid email'}`} required />
      <Input  title='Gender' type='text' autoComplete='Gender' required />
      <Input  title='Password' type='password' autoComplete='Password' required />

      {!isLoading && (
        <Button className='border-2 min-w-32 min-h-12' type="submit">
          Next
        </Button>
      )}
      </form>

      

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

export async function getServerSideProps(context: any) {
  return withAuth(context, false);
}

export default Signin;
