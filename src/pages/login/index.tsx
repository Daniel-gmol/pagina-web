import React, { useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import Button from '@/components/Button'
import Input from '@/components/Input'


const API_URL = process.env.NEXT_PUBLIC_API_URL;

function login() {
  useEffect(() => {
    document.title  = 'Log in'
    // const checkAuthentication = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:3000/api/check-auth', { withCredentials: true });
    //     if (response.data.isAuthenticated) {
    //       window.location.href = '/menu';
    //     }
    //   } catch (error) {
    //     const err = error as AxiosError
    //     console.error(err.response?.data)
    //   }
    // };

    // checkAuthentication();
  }, [])

  const [username, setUsername] = React.useState('');
  const [isValidUser, setIsValidUser] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [isValidPass, setIsValidPass] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

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
         `${API_URL}/api/login`, {
          email : username,
          password_ : password
        },
        { withCredentials: true }
      );
        console.log(response)
    
      if (response.status === 200) {
        window.location.href = '/menu';
      } 
    } catch (error) {
      const err = error as AxiosError
      setError(true);
      setIsValidPass(false);
      setIsValidUser(false);
      console.error(err.response?.data)
    }
  };


  return (
    <div className='container-log-in'>

      <img className='img-log-in' 
           alt='logo'
           src='/rockwellautomation-logo.png' 
      />
    
      <h1>
        Welcome !
      </h1>

      <form className='form-log-in'
            onSubmit={handleLogin}
      >
        <Input className=''
                classInput={`input-component ${isValidUser ? '' : 'invalid-input'}`}
                classLabel={` ${isValidUser ? 'font-medium' : 'invalid-label'}`}
                title='Email' 
                type='text'
                autocomplete='username'
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value);
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  const regex = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$');
                  const value = e.target.value;
                  if (regex.test(value)){
                    setIsValidUser(true);
                  } else{
                    setIsValidUser(false);
                  }
                }}
                isValid={isValidUser}
                errorMessage={`${error ? 'Wrong pasword or email' : 'Invalid email'}`}
                
        />  
        <Input className='mt-10'
                classInput={`input-component ${isValidPass ? '' : 'invalid-input'}`}
                classLabel={` ${isValidPass ? 'font-medium' : 'invalid-label'}`}
                title='Password'
                type={showPassword ? 'text' : 'password'}
                autocomplete='current-password'
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
                isValid={isValidPass}
                errorMessage={`${error ? 'Wrong pasword or email' : ''}`}
                showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
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

        <p>Don't have an account?  
        <a href='./signin' className='text-primary hover:underline'>
           Sign up
        </a>
        </p>
      </form>

      
    </div>
  )
}

export default login