import React from 'react'
import Button from './Button'

function Card({...props} : {[key: string] : any}) {
  return (
    <div className='flex flex-col justify-evenly items-center bg-secondary-grey rounded-md w-[12rem] h-[15rem] p-1 px-3'>
        <img className='rounded-md w[10rem]' src='https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'></img>

        <div className='w-full ml-[1rem] mt-1'>
            <p className='text-left text-xs font-bold'>{props.title}</p>
        </div>

        <div className='w-full ml-[1.1rem] mt-1'>
            <Button color='ra-gradient' className='border-0 w-[5rem] h-[2rem] py-1 px-1'>
                <div className='flex items-center justify-center'>
                    <span> More </span>
                    <div className='ml-2 w-0 h-0
                      border-t-[7px] border-t-transparent 
                      border-l-[15px] border-l-white
                      border-b-[7px] border-b-transparent'>
                    </div>
                </div>
            </Button>
        </div>
    </div>
  )
}

export default Card
