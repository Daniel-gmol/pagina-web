import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

function NewPassword() {
  useEffect(() => {
    document.title = 'New Password';
  }, []);

  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleSavePassword = () => {
    if (password1 === password2) {
      // Aquí vamos a enviar la contraseña al servidor para su almacenamiento seguro
      console.log('Contraseña guardada con éxito:', password1);
      setError('');
    } else {
      setError('Las contraseñas no coinciden');
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
        New Password
      </h1>

      <Input
        className='mt-10'
        classInput='input-component'
        title='Password'
        type='password'
        autoComplete='new-password'
        value={password1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword1(e.target.value);
        }}
      />

      <Input
        className='mt-12'
        classInput='input-component'
        title='Confirm Password'
        type='password'
        autoComplete='new-password'
        value={password2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword2(e.target.value);
        }}
      />

      {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}

      <div style={{ padding: '40px' }}>
        <Button 
          className='border-2 min-w-32 min-h-12' 
          style={{ padding: '10px' }} 
          onClick={handleSavePassword} 
          disabled={!password1 || !password2 || password1 !== password2}
        >
          Save new password
        </Button>
      </div>
    </div>
  );
}

export default NewPassword;
