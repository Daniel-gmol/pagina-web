import React, { useEffect } from 'react'
import Button from '@/components/Button'

function login() {
  useEffect(() => {
    document.title  = 'Log in'  
  }, [])


  return (
    <div className='flex flex-col items-center gap-1 mt-10 space-y-10'>
      
      <img src='/RA-LOGO-PLACEHOLDER.png' alt='logo' width='220' className='object-scale-down max-h-full' />

      <p className='font-barlow font-normal text-3xl'>Welcome !</p>
      
      {/* Convert into a component */}
      <input type='text' placeholder='Username' className='object-scale-down w-200 max-h-full p-2 border-2 border-gray-400' />
      <input type='password' placeholder='Password' className='w-200 h-10 p-2 border-2 border-gray-400' />

      <a href='#' className='text-primary  hover:underline'>Forgot your password?</a>

      <Button>Log in</Button>
      <Button>Guest</Button>

      <p>Don't have an account? <a href='#' className='text-primary hover:underline'>Sign up</a></p>
    </div>
  )

}

export default login