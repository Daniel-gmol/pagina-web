import React, { useEffect } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'

function new_password() {
    useEffect(() => {
        document.title  = 'New Password'  
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
    
    
              
                <Input className='content-center mt-7' 
                        title='New password' 
                        type='password'
                        autocomplete='username'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          console.log('Username:', e.target.value);
                        }}
                />  
                <Input className='content-center mt-7'
                        title='Confirm password'
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
    

export default new_password