import React, { useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import Button from '@/components/Button'
import Input from '@/components/Input'

function login() {
  useEffect(() => {
    document.title  = 'Log in'  
  }, [])

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //es un poco de desastre jajaja
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("entro")

    // Check if username or password is empty
    if (!username || !password) {
      return;
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
    } 
  
    try {


      const response  = await axios.post(
        'https://rockwell-pl.onrender.com/api/login', {
          email : username,
          password_ : password
        });
        console.log(response)
    
      if (response.status === 200) {
        window.location.href = '/menu';
      } else {
        console.error('Failed to log in');
      }
    } catch (error) {
      const err = error as AxiosError
      console.error(err.response?.data)
    }
  };


  return (
    <div className='container-log-in'>

      <img className='img-log-in' 
           alt='logo'
           src='/RA-LOGO-PLACEHOLDER.png' 
      />
    
      <h1 className='h1-log-in'>
        Welcome !
      </h1>

      <form className='form-log-in'
            onSubmit={handleLogin}
      >
        <Input className=''
                classInput='input-component' 
                title='Email' 
                type='text'
                autocomplete='username'
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value);
                  // console.log('Username:', e.target.value);
                }}
        />  
        <Input className='mt-10'
                classInput='input-component'
                title='Password'
                type='password'
                autocomplete='current-password'
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                  // console.log('Password:', e.target.value);
                }}
        />

        <a href='./forgot' 
          className='text-primary hover:underline mt-3'>
          Forgot your password?
        </a>

        <Button className='border-2 min-w-32 min-h-12'>Log in</Button>
        <Button className='border-2 min-w-32 min-h-12' 
          onClick={(event: { preventDefault: () => void }) => { 
            event.preventDefault(); 
            window.location.href = '/menu'; 
          }}
        >Guest</Button>
      </form>

      <p>Don't have an account?  
        <a href='./signin' className='text-primary hover:underline'>
           Sign up
        </a>
      </p>
    </div>
  )
}

export default login