import React, { useEffect } from 'react';
import axios, {AxiosError} from 'axios';
import NewCarousel from '@/components/NewCarousel';
import { Unity, useUnityContext } from "react-unity-webgl";
import { withAuth } from '@/lib/auth';


const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Menu({isAuthenticated}: {isAuthenticated: boolean}) {
  useEffect(() => {
    document.title  = 'Menu'  
  }, [])

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


  
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/neve.loader.js",
    dataUrl: "build/neve.data",
    frameworkUrl: "build/neve.framework.js",
    codeUrl: "build/neve.wasm",
  });

  return (
    /* 
    The background image used in the Menu component is attributed to Vecteezy.com
    URL: https://www.vecteezy.com/free-vector/abstract
    */
    <div className='flex flex-col items-center gap-5'style={{backgroundImage:`url(/vecteezy_abstract-colored-wave-card-set-background-vector-illustration_.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <nav className='sticky top-0 flex justify-evenely w-full p-5 bg-white shadow-md'>
        <button className='text-black ml-10 border-transparent border-b-4
                            hover:border-primary '>
                                            
                Profile
        </button>
        {isAuthenticated && <button className='ext-black ml-10 border-transparent border-b-4
                            hover:border-primary'
                onClick={logout}
        >
                Logout
        </button>}
      </nav>

      {/*Game*/}
      <Unity  className='m-10 w-[64rem] h-[35rem]' unityProvider={unityProvider}></Unity>

      {/*Carousel*/}
      <div className='w-[70%] h-[10%]'>
        <NewCarousel className='w-[50%] h-[10%]' cardsData={5}/>
      </div>
      <br/>

    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { req } = context;
  const { cookie } = req.headers;
  return withAuth(context, cookie);
}

export default Menu;