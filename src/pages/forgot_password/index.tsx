import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

function index() {
  const [username, setUsername] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [buttonText, setButtonText] = useState('Send code');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    document.title = 'Forgot Password';
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && buttonText === 'Resend code') {
      setButtonText('Send code');
    }
    return () => clearInterval(interval);
  }, [timer, buttonText]);

  const handleClick = () => {
    if (buttonText === 'Send code') {
      // Lógica para enviar el código
      setButtonText('Resend code');
      setTimer(30);
    }
  };

  return (
    <div className='container-log-in'>
      
      <div>
        <a href='/'>
          <img 
            className='img-log-in' 
            alt='logo' 
            src='/RA-LOGO-PLACEHOLDER.png'
          />
        </a>  
      </div>

      <h1 style={{ marginBottom: '1.5rem' }}>
        Forgot password!
      </h1>

      
      <Input className='mt-7'
        classInput='input-component'
        title='Email'
        type='text'
        autoComplete='username'
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUsername(e.target.value);
          console.log('Username:', e.target.value);
        }}
      />

      <div style={{ padding: '25px' }}>
        <Button 
          style={{ padding: '10px 20px' }}
          onClick={handleClick}
          disabled={timer > 0} // Deshabilita el botón mientras el temporizador está en marcha
        >
          {buttonText} {timer > 0 && `(${timer})`}
        </Button>
      </div>
      

      <Input 
        classInput='input-component'
        title='Confirmation code'
        type='password'
        autoComplete='current-password'
        value={confirmationCode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setConfirmationCode(e.target.value);
          console.log('Confirmation Code:', e.target.value);
        }}
      />

      <div style={{ padding: '25px' }}>
        <a href='#'>
          <Button style = {{ padding: '10px 20px'}}>
            Confirm
          </Button>
        </a>
      </div>
    </div>
  );
}

export default index;
