import React, { useEffect } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'

function index() {
  useEffect(() => {
    document.title  = 'Forgot Password'  
  }, [])

  return (
      <div className='container-log-in'>
          <img className='img-log-in' 
              alt='logo'
              src='/RA-LOGO-PLACEHOLDER.png' 
          />
        
          <h1 style={{ marginBottom: '1.5rem' }}>
            Forgot password !
          </h1>


          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input 
              className='content-center mt-7' 
              title='Email' 
              type='text'
              autocomplete='username'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log('Username:', e.target.value);
              }}
              style={{ flexGrow: 1 }} // Esto hace que el campo de entrada ocupe todo el espacio disponible
            /> 
            <Button style={{ marginLeft: '1rem' }}>Send code</Button>
          </div>


            <Input className='content-center mt-7'
                    title='Confirm '
                    type='password'
                    autocomplete='current-password'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      console.log('Password:', e.target.value);
                    }}
            />

            <div style={{ padding: '40px' }}>
              <a href='#'>
                <Button className='border-2 min-w-32 min-h-12' > Save new password</Button>
              </a>
            </div>
    </div>
  )
}



export default index