import React, {useEffect} from 'react'
import { withAuth } from '@/lib/auth'
import axios, { AxiosError } from 'axios'
import Table from '@/components/Table'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

function admin({user}: {user: any}) {
  const [isClient, setIsClient] = React.useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    setIsClient(true);
    document.title = 'Admin';
    if (user.rol === 'user') {
      setTimeout(() => {
        window.location.href = '/menu';
      }, 100);
    }
  }, []);

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

  const data = [
    {
      "name": "PA",
      "click": 4000,
    },
    {
      "name": "PB",
      "click": 3000,
    },
    {
      "name": "PC",
      "click": 2000,
    },
    {
      "name": "PD",
      "click": 2780,
    },
    {
      "name": "PE",
      "click": 1890,
    },
    {
      "name": "PF",
      "click": 2390,
    },
    {
      "name": "PG",
      "click": 3490,
    }
  ]

  const renderChart = isClient && (<BarChart width={730} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="click" fill="#82ca9d" />
  </BarChart>);

  if (user.rol === 'admin') {
    return (
      <div className='flex flex-col justify-stretch items-center h-full space-y-12'>
        <nav className='sticky top-0 flex justify-evenely w-full p-5 bg-white shadow-md'>
        {!user && <button 
            className='text-black ml-10 border-transparent border-b-4
                      hover:border-primary '
            onClick={() => window.location.href = '/signin'}>
            Sign up
        </button>}
        {user && <button 
            className='text-black ml-10 border-transparent border-b-4
                      hover:border-primary '
            onClick={() => window.location.href = '/profile'}>
            Profile
        </button>}
        {user && <button 
            className='ext-black ml-10 border-transparent border-b-4
                      hover:border-primary'
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

        {renderChart}
        <span>Top scores</span>
        <Table />
        
      </div>
    )
  } else {
    return <div>403 FORBIDDEN</div>
  }
}

export async function getServerSideProps(context: any) {
  return withAuth(context, true);
}

export default admin