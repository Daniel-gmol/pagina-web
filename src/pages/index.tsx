import React, { useEffect } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'

function login() {
  useEffect(() => {
    document.title  = 'Log in'  
  }, [])


  return (
    <div className='w-full h-full flex flex-col justify-evenly items-center'>

      <img className='object-scale-down max-h-full mt-5' 
           width='220'
           alt='logo'
           src='/RA-LOGO-PLACEHOLDER.png' 
      />

      <p className='font-barlow font-normal text-3xl mt-10'>
        Welcome !
      </p>

      <form className='flex flex-wrap w-full h-[15rem] mt-10 justify-center'>
        <Input className='content-center' 
                title='User' 
                type='text'
                autocomplete='username'
        />  
        <Input className='content-center mt-10'
                title='Password'
                type='password'
                autocomplete='current-password'
        />
        <a href='#' 
          className='text-primary hover:underline mt-3'>
          Forgot your password?
        </a>
      </form>

      <div className='flex flex-col flex-wrap gap-3'>
        <Button>Log in</Button>
        <Button onClick={() => { window.location.href = '/menu'; }}>Guest</Button>

        <p>Don't have an account?  
        <a href='./signin' className=' text-primary hover:underline'>
           Sign up
        </a>
      </p>
      </div>

    </div>
  )

}

export default login