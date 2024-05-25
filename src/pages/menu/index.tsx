import React, { useEffect } from 'react';
import Carousel from '@/components/Carousel';
import NewCarousel from '@/components/NewCarousel';
import { Unity, useUnityContext } from "react-unity-webgl";


function Menu() {
  useEffect(() => {
    document.title  = 'Menu'  
  }, [])

  
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/neve.loader.js",
    dataUrl: "build/neve.data",
    frameworkUrl: "build/neve.framework.js",
    codeUrl: "build/neve.wasm",
  });
  useEffect(() => {
    document.body.classList.add('menu-background');
    // Retirar la clase de fondo cuando el componente se desmonte
    return () => {
      document.body.classList.remove('menu-background');
    };
  }, []);
  return (
    <div className='flex flex-col items-center gap-5'style={{backgroundImage:`url(/fondoCoool2.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

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

export default Menu;