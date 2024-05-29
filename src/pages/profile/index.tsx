import React from 'react'
import { withAuth } from '@/lib/auth'
import axios, { AxiosError } from 'axios'

function profile({user} : {user: any}) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const logout = async () => {
    try {
        const response = await axios.post(
            `${API_URL}/api/logout`, 
            {}, 
            { withCredentials: true }
        );
        if (response.status === 200) {
            // Redirect to login page or update state to reflect logged out status
            window.location.href = '/';
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        const err = error as AxiosError;
        console.error('Logout failed');
        console.error(err.response?.data);
    }
};


  if (user) {
    return (
      <div className='flex flex-col justify-start items-center h-full'>
        <nav className='sticky top-0 flex justify-evenely w-full p-5 bg-white shadow-md'>
        {user && <button 
            className='text-black ml-10 border-transparent border-b-4
                      hover:border-primary '
            onClick={() => window.location.href = '/menu'}>
            Menu
        </button>}
        {user && <button 
            className='ext-black ml-10 border-transparent border-b-4
                      hover:border-primary'
            onClick={logout}>
            Logout
        </button>}
      </nav>

        <h1 className='mt-10'>{user.first_name}</h1>
        <p>{user.email}</p>
        
        <h2 className='mt-20'>Top score: {user.max_score}</h2>
        
      </div>
    )
  } else {
    return (
      <div>loading...</div>
    )
  }
}

export async function getServerSideProps(context: any) {
  return withAuth(context, true)
}

export default profile