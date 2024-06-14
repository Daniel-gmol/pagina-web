import React, { useEffect } from 'react';
import axios, {AxiosError} from 'axios';
import NewCarousel from '@/components/NewCarousel';
import { Unity, useUnityContext } from "react-unity-webgl";
import { parseCookies } from "nookies";
import jwt, { JwtPayload } from "jsonwebtoken";
import { withAuth } from '@/lib/auth';
import { getProds } from '@/lib/prods';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Menu({user, prodData} : {user: any, prodData: any}) {

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
    } catch (error : unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Logout failed');
        console.error(error.response?.data);
      } else {
          // Handle any other types of errors
          console.error(error);
      }
    }
};

  const { unityProvider } = useUnityContext({
    loaderUrl: "build/save_rock.loader.js",
    dataUrl: "build/save_rock.data.unityweb",
    frameworkUrl: "build/save_rock.framework.js.unityweb",
    codeUrl: "build/save_rock.wasm.unityweb",
  });

  return (
    /* 
    The background image used in the Menu component is attributed to Vecteezy.com
    URL: https://www.vecteezy.com/free-vector/abstract
    */
    <div className='flex flex-col items-center gap-5'style={{backgroundImage:`url(/vecteezy_abstract-colored-wave-card-set-background-vector-illustration_.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      
      <nav className='sticky top-0 flex justify-evenely w-full p-5 bg-white shadow-md'>
        {!user && <button 
            className='text-black ml-10 border-transparent border-b-4
                      hover:border-primary '
            onClick={() => window.location.href = '/login'}>
            Log in
        </button>}
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
        {user && user.rol === 'admin' && <button 
            className='ext-black ml-10 border-transparent border-b-4
                      hover:border-primary'
            onClick={() => window.location.href = '/admin'}>
            Admin
        </button>}
        {user && <button 
            className='ext-black ml-10 border-transparent border-b-4
                      hover:border-primary'
            onClick={logout}>
            Logout
        </button>}
      </nav>

      {/*Game*/}
      <Unity  id="unity-canvas" className='m-10 w-[64rem] h-[36rem]' unityProvider={unityProvider}></Unity>

      {/*Carousel*/}
      {prodData && <div className='w-[70%] h-[10%]'>
        <NewCarousel className='w-[50%] h-[10%]' cardsData={prodData} userData={user}/>
      </div>}
      <br/>

    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { props: userProps } = await withAuth(context, false);
  const { props: prodProps }  = await getProds(context);
  return {
    props: {
      user: userProps ? userProps.user : undefined,
      prodData: prodProps ? prodProps.data : undefined
    }
  }
}

export default Menu;