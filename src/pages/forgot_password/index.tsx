import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

function index() {
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [buttonText, setButtonText] = useState('Send Code');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    document.title = 'Forgot Password';
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && buttonText === 'Resend Code') {
      setButtonText('Send Code');
    }
    return () => clearInterval(interval);
  }, [timer, buttonText]);

  const handleSendCodeClick = () => {
    if (buttonText === 'Send Code') {
      // Aquí va la lógica para enviar el código de confirmación al correo electrónico
      setButtonText('Resend Code');
      setTimer(30); // Tiempo en segundos para volver a enviar el código
    }
  };

  const handleConfirmClick = () => {
    // Aquí va la lógica para confirmar el código de confirmación ingresado por el usuario
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
        Forgot Password
      </h1>
      
      <Input 
        className='mt-7'
        classInput='input-component'
        title='Email'
        type='email'
        autoComplete='username'
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
          console.log('Email:', e.target.value);
        }}
      />

      <div style={{ padding: '25px' }}>
        <Button 
          style={{ padding: '10px 20px' }}
          onClick={handleSendCodeClick}
          disabled={timer > 0} // Deshabilita el botón mientras el temporizador está en marcha
        >
          {buttonText} {timer > 0 && `(${timer})`}
        </Button>
      </div>
      
      <Input 
        classInput='input-component'
        title='Confirmation Code'
        type='text'
        autoComplete='off'
        value={confirmationCode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setConfirmationCode(e.target.value);
          console.log('Confirmation Code:', e.target.value);
        }}
      />

      <div style={{ padding: '25px' }}>
        <Button 
          style={{ padding: '10px 20px' }}
          onClick={handleConfirmClick}
          disabled={!confirmationCode}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default index;
