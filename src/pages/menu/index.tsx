import React from 'react';
import Carousel from '@/components/Carousel';
import { Unity, useUnityContext } from "react-unity-webgl";

function Menu() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/nuevo.loader.js",
    dataUrl: "build/nuevo.data",
    frameworkUrl: "build/nuevo.framework.js",
    codeUrl: "build/nuevo.wasm",
  });


  return (
    <div className='flex flex-col justify-evenly items-center p-5 w-full h-full'>
  
      {/* Aquí está el juego de Unity incrustado */}
      <div className='flex flex-col w-[72rem] h-full pb-5'>
        <Unity unityProvider={unityProvider}></Unity>
      </div>

      <Carousel/>
    </div>
  );
}

export default Menu;